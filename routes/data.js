const express = require('express');
const router = express.Router();
const helper= require('./data.helper');

router.post('/card', async (req, res) => {
    console.log("pass");
    console.log(req.body);

    let {id, category, content, type} = req.body;

    if(!id||!category|| !content||!type)
    {
       res.status(400).json({error: "Bad Request: missing fileds" });
       return;
    } 
    
    if(typeof id !== "number" || typeof category !== "string" || typeof content !== "string"||
     typeof type !== "string")
    {
       res.status(400).json({error: "Bad Request: type error" });
       return;
    } 

    try {
      const newCard = await helper.createCard(
        id, category, content, type
      );
      res.status(200).json(newCard);
    } catch (e) {
      res.status(500).json({error: e});
    }
  
    return;

})

router.get('/all_cards', async (req, res) => {
    
    try {
        const cardList = await helper.getCards();
        /* const no_id_list= cardList.map(({ _id, ...rest}) => rest);
        console.log(no_id_list); */
        res.status(200).json(cardList);
     } catch (e){
        res.status(500).json({error:e});
     }

})

router.patch("/card/:id", async (req, res) => {
    const {category} = req.body;

    if(typeof category !== 'string'){
       res.status(400).json({error: "Bad Request: type error" });
       return;

    }

    //const body={category: category}

    console.log(req.params.id);
    try{
      const updatedCard = await helper.updateCard(req.params.id, req.body);
      res.status(200).json(updatedCard);
      
    }catch(e){
      res.status(500).json({error:e});
    }
 });

module.exports = router;