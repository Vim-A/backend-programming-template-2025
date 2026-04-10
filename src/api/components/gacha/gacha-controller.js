const gachaService = require('./gacha-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { ne } = require('@faker-js/faker');

async function Ngegacha(request, response, next) {
  try {
    const { user_id: userId, nama } = request.body;

    if (!userId || !nama) {
      throw errorResponder(
        errorTypes.VALIDATION_EROR,
        ' user id dan nama di isi ya'
      );
    }

    const result = await gachaService.Ngegacha({
      userId,
      nama,
    });

    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function Gethistorigacha(request, response, next) {
  try {
    const { user_id: userId } = request.body;
    if (!userId) {
      throw errorResponder(
        errorTypes.VALIDATION_EROR, ' user id di isi ya');
    }
    const Histori = await gachaService.Historigacha({
      userId,
    });
    return response.status(200).json(Histori);
  } catch (error) {
    return next(error);
  }
}

async function GetlistHadiah(request, response, next) {
  try {
    const hadiah = await gachaService.DptHadiah();

    return response.status(200).json(hadiah);
  } catch (error) {
    return next(error);
  }
}

async function getListPemenang(request, response, next) {
  try{
    const pemenang = await gachaService.getListPemenang();

    return response.status(200).json(pemenang);
  } catch (error) {
    return next(error);
  }
}
