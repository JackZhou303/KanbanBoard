const MongoClient = require("mongodb").MongoClient;

const mongoConfig = {
  serverUrl: "mongodb+srv://Jack:7P3KcrTXOLlmZUOx@kanbandatabase-hmezw.gcp.mongodb.net/test?retryWrites=true&w=majority",
  database: "KanbanDatabase"
};

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl,  {useNewUrlParser: true ,
      useUnifiedTopology: true});
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};
