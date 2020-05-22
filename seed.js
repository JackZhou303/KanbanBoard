const helper= require('./routes/data.helper');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function main() {

    

    const data = [{
        id: 1,
        category: "rw",
        content: "Cake",
        type :"card"
    }, {
        id: 2,
        category: "rw",
        content: "Cat",
        type :"card"
    }, {
        id: 3,
        category: "rw",
        content: "Sandwich",
        type :"card"
    } , {
        id: 4,
        category: "rw",
        content: "Book",
        type :"card"
    }]

    MongoClient.connect(url, {useNewUrlParser: true ,
        useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        var dbc = db.db("Zhou-Yujie-Kanban-board");
        dbc.dropCollection("cards", function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
        });
      });

  for(let i=0; i< data.length; i++){
     let {id, category, content, type}= data[i];
     await helper.createCard(id, category, content, type);
  }
  console.log("Done seeding database");

}

main();