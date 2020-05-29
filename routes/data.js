const express = require('express');
const router = express.Router();
const helper= require('./data.helper');

router.post('/card', async (req, res) => {

    let {category, content, type} = req.body;

    if(!category|| !content||!type)
    {
       res.status(400).json({error: "Bad Request: missing fileds" });
       return;
    } 
    
    if( typeof category !== "string" || typeof content !== "string"||
     typeof type !== "string")
    {
       res.status(400).json({error: "Bad Request: type error" });
       return;
    } 

    try {
      const newCard = await helper.createCard(
        category, content, type
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
        res.status(200).json(cardList);
     } catch (e){
        res.status(500).json({error:e});
     }

})

router.patch("/update/:id", async (req, res) => {
    const {category} = req.body;

    if(typeof category !== 'string'){
       res.status(400).json({error: "Bad Request: type error" });
       return;

    }
    try{
      const updatedCard = await helper.updateCard(req.params.id, req.body);
      res.status(200).json(updatedCard);
      
    }catch(e){
      res.status(500).json({error:e});
    }
 });


 
router.delete("/remove/:id", async (req, res) => {

  try {
    const deletedCard=await helper.deleteCard(req.params.id);
    res.status(200).json(deletedCard);
    }
  catch (e) {
    res.status(500).json({error:e});
     }
  });

module.exports = router;