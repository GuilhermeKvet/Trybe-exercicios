import express, { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Plants from './Plants';

const app = express();
const plants = new Plants();

app.use(express.json());

const idRoute = '/plant/:id';

const PORT = process.env.PORT || 3000;

app.get('/plants', async (req: Request, res: Response) => {
  const result = await plants.getPlants();
  res.status(200).json(result);
});

app.get(idRoute, async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await plants.getPlantById(id);
  if (!result) return res.status(404).json({ message: 'Plant not Found!' });
  res.status(200).json(result);
});

app.delete(idRoute, async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await plants.removePlantById(id);
  if (!result) return res.status(404).json({ message: 'Plant not Found!' });
  res.status(204).json(result);
});

app.put(idRoute, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { plant } = req.body;
  const result = await plants.editPlant(id, plant);
  res.status(200).json(result);
});

app.post('/plant', async (req: Request, res: Response) => {
  const { plant } = req.body;
  const result = await plants.initPlant(plant);
  res.status(201).json(result);
});

app.get('/sunny/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await plants.getPlantsThatNeedsSunWithId(id);
  res.status(204).json(result);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;