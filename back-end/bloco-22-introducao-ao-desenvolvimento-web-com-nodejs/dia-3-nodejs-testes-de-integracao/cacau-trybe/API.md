### **GET** _'/chocolates'_

- Objetivo: Retornar uma lista com todos os chocolates cadastrados.
- Código HTTP: 200 - OK;
- Body (exemplo):
``` json
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```