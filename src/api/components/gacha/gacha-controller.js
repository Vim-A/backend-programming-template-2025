const gachaService = require('./gacha-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

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
