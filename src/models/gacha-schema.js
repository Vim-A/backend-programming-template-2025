module.exports = (db) =>
  db.model(
    'Gacha',
    db.Schema({
      user_id: {
        type: String,
        required: true,
      },
      nama: {
        type: String,
        required: true,
      },
      is_winner: {
        type: Boolean,
        required: true,
        default: false,
      },
      hadiah: {
        type: String,
        default: null,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    })
  );