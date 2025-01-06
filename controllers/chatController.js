const Chat = require('../models/chat');
const Message = require('../models/message');

// Get all chats
exports.getAllChats = async (req, res) => {
    try {
        const chats = await Chat.find()
        // .populate('messages');
        res.json(chats);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching chats', error });
    }
};

// Add a new chat
exports.addChat = async (req, res) => {
    try {
        const { name, lastName } = req.body;
        const newChat = new Chat({ name, lastName, alt: `${name} ${lastName}`, messages: [] });
        await newChat.save();
        res.status(201).json(newChat);
    } catch (error) {
        res.status(500).json({ message: 'Error adding chat', error });
    }
};

// Edit a chat
exports.editChat = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastName } = req.body;
        const updatedChat = await Chat.findByIdAndUpdate(
            id,
            { name, lastName, alt: `${name} ${lastName}` },
            { new: true }
        );
        res.json(updatedChat);
    } catch (error) {
        res.status(500).json({ message: 'Error editing chat', error });
    }
};

// Delete a chat
exports.deleteChat = async (req, res) => {
    try {
        const { id } = req.params;
        await Chat.findByIdAndDelete(id);
        res.status(204).json({ 'message': 'Chat deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting chat', error });
    }
};
