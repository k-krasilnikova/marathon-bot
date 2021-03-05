module.exports = {
  async up(db, client) {
    await db.createCollection("marathons");
  },

  async down(db, client) {
    db.dropCollection("marathons");
  },
};
