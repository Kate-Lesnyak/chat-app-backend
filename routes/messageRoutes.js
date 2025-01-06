const express = require('express');
const { getAllMessages, addMessage, editMessage, deleteMessage } = require('../controllers/messageController');

const router = express.Router();

router.get('/', getAllMessages);
router.post('/', addMessage);
router.put('/:id', editMessage);
router.delete('/:id', deleteMessage);

module.exports = router;
