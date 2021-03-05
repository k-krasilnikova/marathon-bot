module.exports = {
  async up(db, client) {
    const users = await db.createCollection("users");
    await users.insertMany([
      {
        chatId: 314829300,
        fullName: "Катерина Красильникова",
        isActive: true,
        isTrainer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    const reports = await db.createCollection("reports");
  },

  async down(db, client) {
    db.dropCollection("users");
    return db.dropCollection("reports");
  },
};
