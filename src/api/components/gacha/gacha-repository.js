const { Gacha, Hadiah } = require('../../../models');

async function HitungGachaUser(userId, startDate, endDate) {
  return Gacha.countDocuments({
    user_id: userId,
    created_at: {
      $gte: startDate,
      $lte: endDate,
    },
  });
}

async function SimpanHistory(data) {
  return Gacha.create(data);
}

async function AmbilHistoriUser(user) {
  return Gacha.find({
    user_id: user,
  });
}

async function AmbilSemuaHadiah() {
  return Hadiah.find({});
}

async function HitungPemenangPerHadiah(namaHadiah) {
  return Gacha.countDocuments({
    is_winner: true,
    hadiah: namaHadiah,
  });
}

async function AmbilPemenangPerhadiah(namaHadiah) {
  return Gacha.find({
    is_winner: true,
    hadiah: namaHadiah,
  }).sort({ created_at: -1 });
}

module.exports = {
  HitungGachaUser,
  SimpanHistory,
  AmbilHistoriUser,
  AmbilSemuaHadiah,
  HitungPemenangPerHadiah,
  AmbilPemenangPerhadiah,
};
