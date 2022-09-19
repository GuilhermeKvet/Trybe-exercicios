const express = require('express');

const app = express();

app.use(express.json());

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;
    const activity = activities.find((activitie) => activitie.id === Number(id))
    res.status(200).json({ activity })
});

app.get('/myActivities', (req, res) => res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  if (status) {
    const filteredActivities = activities.filter((activitie) => activitie.status === status);
    return res.status(200).json(filteredActivities);
  }
  return res.status(404).json({ message: `Nenhuma atividade com status de ${status}` });
});

module.exports = app;