const express = require('express');
const { getAllChats, addChat, editChat, deleteChat } = require('../controllers/chatController');

const router = express.Router();

router.get('/', getAllChats);
router.post('/', addChat);
router.put('/:id', editChat);
router.delete('/:id', deleteChat);

module.exports = router;
