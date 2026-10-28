// const express = require('express'); type commonjs
import express from 'express';

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API GT4 funcionando' });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

export default app;