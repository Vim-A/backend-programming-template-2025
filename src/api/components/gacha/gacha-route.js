const express = require('express');
const gachaController = require('./gacha-controller');

module.exports = (app) => {
  const route = express.Router();

  app.use('/gacha', route);

  route.post('/', gachaController.Ngegacha);
  route.get('/histori', gachaController.getHistorigacha);
  route.get('/hadiah', gachaController.getListHadiah);
  route.get('/pemenang', gachaController.getListPemenang);
};
