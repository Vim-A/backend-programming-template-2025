const gachaRepository = require('./gacha-repository');
const { errorResponder, errorTypes } = require('../../../core/errors');

function Acak(max) {
  return Math.floor(Math.random() * max);
}

function namadiSamarkan(nama) {
  if (!nama) return '';

  return nama
    .split(' ')
    .map((kata) => {
      if (kata.length <= 2) {
        return `${kata[0]}*`;
      }

      return kata[0] + '*'.repeat(kata.length - 2) + kata[kata.length - 1];
    })
    .join(' ');
}

async function Ngegacha({ userId, nama }) {
  const now = new Date();

  const startDate = new Date(now);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(now);
  endDate.setHours(23, 59, 59, 999);

  const totalGacha = await gachaRepository.HitungGachaUser(
    userId,
    startDate,
    endDate
  );

  if (totalGacha >= 5) {
    throw errorResponder(
      errorTypes.UNPROCESSABLE_ENTITY,
      'Batas gacha cuma 5 kali sehari'
    );
  }

  const semuaHadiah = await gachaRepository.AmbilSemuaHadiah();

  if (!semuaHadiah || semuaHadiah.length === 0) {
    throw errorResponder(
      errorTypes.UNPROCESSABLE_ENTITY,
      'Data hadiah belum tersedia'
    );
  }

  const hadiahTersediaDenganKuota = await Promise.all(
    semuaHadiah.map(async (barang) => {
      const totalPemenang = await gachaRepository.HitungPemenangPerHadiah(
        barang.nama_hadiah
      );

      return {
        ...barang.toObject(),
        totalPemenang,
      };
    })
  );

  const hadiahTersedia = hadiahTersediaDenganKuota.filter(
    (barang) => barang.totalPemenang < barang.kuota
  );

  let pemenang = false;
  let hadiahDidapat = null;

  const randoms = Acak(100);

  if (randoms < 30 && hadiahTersedia.length > 0) {
    pemenang = true;

    const indexHadiah = Acak(hadiahTersedia.length);
    hadiahDidapat = hadiahTersedia[indexHadiah].nama_hadiah;
  }

  const hasilGacha = await gachaRepository.SimpanHistory({
    user_id: userId,
    nama,
    is_winner: pemenang,
    hadiah: hadiahDidapat,
    created_at: now,
  });

  return {
    message: 'Gacha berhasil',
    data: {
      id: hasilGacha.id,
      user_id: hasilGacha.user_id,
      nama: hasilGacha.nama,
      is_winner: hasilGacha.is_winner,
      hadiah: hasilGacha.hadiah,
      created_at: hasilGacha.created_at,
    },
  };
}

async function Historigacha({ userId }) {
  const histori = await gachaRepository.AmbilHistoriUser(userId);

  return {
    message: 'Histori gacha berhasil diambil',
    data: histori,
  };
}

async function DptHadiah() {
  const semuaHadiah = await gachaRepository.AmbilSemuaHadiah();

  const hasil = await Promise.all(
    semuaHadiah.map(async (barang) => {
      const totalPemenang = await gachaRepository.HitungPemenangPerHadiah(
        barang.nama_hadiah
      );

      return {
        nama_hadiah: barang.nama_hadiah,
        kuota: barang.kuota,
        sisa_kuota: barang.kuota - totalPemenang,
      };
    })
  );

  return {
    message: 'List hadiah berhasil diambil',
    data: hasil,
  };
}

async function getListPemenang() {
  const semuaHadiah = await gachaRepository.AmbilSemuaHadiah();

  const hasil = await Promise.all(
    semuaHadiah.map(async (barang) => {
      const daftarPemenang = await gachaRepository.AmbilPemenangPerhadiah(
        barang.nama_hadiah
      );

      return {
        nama_hadiah: barang.nama_hadiah,
        pemenang: daftarPemenang.map((item) => namadiSamarkan(item.nama)),
      };
    })
  );

  return {
    message: 'List pemenang berhasil diambil',
    data: hasil,
  };
}

module.exports = {
  Ngegacha,
  Historigacha,
  DptHadiah,
  getListPemenang,
};
