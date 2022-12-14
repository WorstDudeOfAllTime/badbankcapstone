const { MongoClient } = require("mongodb");
const db = "mongodb+srv://wdoatAdmin:3WORSTdudeOFall3@cluster0.bexppic.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      if (db) {
        _db = db.db("users");
        console.log("Successfully connected");
      }
      return callback(err);
    });
  },
  getDb: () => {
    return _db;
  },
};
