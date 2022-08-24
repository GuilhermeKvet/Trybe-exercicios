const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs').promises;
const app = require('../../src/app');
chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({
    brands: [
        { id: 1, name: "Lindt & Sprungli" },
        { id: 2, name: "Ferrero" },
        { id: 3, name: "Ghirardelli" }
      ],
      chocolates: [
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
        { id: 3, name: "Mon Chéri", brandId: 2 },
        { id: 4, name: "Mounds", brandId: 3 },
      ],
      nextChocolateId: 5
});

describe('Testando a API Cacau Trybe', () => {
    describe('Usando metodo POST em /chocolates', () => {
        beforeEach(() => {
            sinon.stub(fs, 'readFile').returns(mockFile);
        });
        afterEach(() => {
            sinon.restore();
        });
        it('Cria um chocolate com sucesso', async () => {
            const response = await chai.request(app).post('/chocolates').send({
                name: "Mint Not So Intense",
                brandId: 2
            });
            expect(response.status).to.be.equal(201);
            expect(response.body.chocolate).to.be.deep.equal({
                id: 5,
                name: "Mint Not So Intense",
                brandId: 2
            });
        });
    });
    describe('Usando o método GET em /chocolates/:id para buscar o ID 4', () => {
        it('Retorna o chocolate Mounds', async () => {
            const response = await chai.request(app).get('/chocolates/4');

            expect(response.status).to.be.equal(200);
            expect(response.body.chocolate).to.be.deep.equal([
                {
                    id: 4,
                    name: 'Mounds',
                    brandId: 3
                }
            ]);
        });
    });
    describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
        it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/brand/1');
    
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolates).to.deep.equal([
            {
              id: 1,
              name: 'Mint Intense',
              brandId: 1,
            },
            {
              id: 2,
              name: 'White Coconut',
              brandId: 1,
            },
          ]);
        });
      });
      describe('Usando o metodo GET em /chocolates/total para saber a quantidade de chocolates', () => {
        it('Retorna a quantidade de chocolates existentes', async () => {
          const response = await chai.request(app).get('/chocolates/total');
          expect(response.status).to.be.equal(200);
          expect(response.body).to.deep.equal({ totalChocolates: 5 });
        });
      });
      describe('Usando o método PUT em /chocolates/:id', () => {
        it('Atualiza um chocolate existente', async () => {
          const response = await chai.request(app).put('/chocolates/1').send({
            name: 'Mint Pretty Good',
            brandId: 2,
          });
    
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolate).to.deep.equal({
            id: 1,
            name: 'Mint Pretty Good',
            brandId: 2,
          });
        });
          
        it('Se o chocolate não existe, gera um erro', async () => {
          const response = await chai.request(app).put('/chocolates/555').send({
            name: 'Mint Pretty Good',
            brandId: 2,
            });
          
          expect(response.status).to.be.equal(404);
          expect(response.body).to.deep.equal({
            message: 'chocolate not found',
          });
        });
      });
      describe('Usando o método GET em /chocolates/search', () => {
        it('Retorna os chocolates que contém "Mo" no nome', async () => {
          const response = await chai.request(app).get('/chocolates/search?name=Mo');
  
          expect(response.status).to.be.equal(200);
          expect(response.body).to.deep.equal([
            {
              id: 3,
              name: 'Mon Chéri',
              brandId: 2,
            },
            {
              id: 4,
              name: 'Mounds',
              brandId: 3,
            },
          ]);
        });
  
        it('Retorna um array vazio ao não encontrar nenhum chocolate', async () => {
          const response = await chai.request(app).get('/chocolates/search?name=ZZZ');
  
          expect(response.status).to.be.equal(404);
          expect(response.body).to.deep.equal([]);
        });
      });
});