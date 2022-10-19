import express, { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Plants from './Plants';

const app = express();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript');
});

const plants = new Plants();

app.get('/plants', async (req: Request, res: Response) => {
  const result = await plants.getPlants();
  res.status(200).json(result);
});

app.get('/plants/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await plants.getPlantById(id);
  res.status(200).json(result);
});

app.delete('/plants/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await plants.removePlantById(id);
  res.status(204).json(result);
});

module.exports = app;