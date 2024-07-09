const express=require('express');
const router=express.Router();
// const router = require('express').Router(); 
const roomController=require('../controllers/roomController');

router.get('/rooms',roomController.getRooms);
router.post('/book',roomController.bookRoom);
module.exports=router;