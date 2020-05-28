const helper= require('./routes/data.helper');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function main() {

    

    const data = [{
        category: "rw",
        content: "Cake",
        type :"card"
    }, {
        category: "rw",
        content: "Cat",
        type :"card"
    }, {
        category: "rw",
        content: "Sandwich",
        type :"card"
    } , {
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
     let {category, content, type}= data[i];
     await helper.createCard(category, content, type);
  }
  console.log("Done seeding database");

}

main();