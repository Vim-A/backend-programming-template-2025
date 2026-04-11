module.exports = (db) =>
  db.model(
    'Hadiah',
    db.Schema({
      nama_hadiah: {
        type: String,
        required: true,
      },
      kuota: {
        type: Number,
        required: true,
      },
    })
  );
