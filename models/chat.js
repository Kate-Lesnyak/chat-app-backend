const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers/handleMogooseError');


const chatSchema = new Schema({
    name: { type: String, required: [true, 'Name is required'] },
    lastName: { type: String, default: '' },
    src: { type: String, default: '' },
    alt: { type: String, default: '' },
    messages: [{
        chatId: { type: Schema.Types.ObjectId, ref: 'chat', required: true },
        message: { type: String, required: true },
        datetime: { type: Date, default: Date.now, required: true },
        sender: { type: String, enum: ['user', 'bot'], required: true },
    }],
},
    {
        versionKey: false,
        timestamps: true
    }
);

chatSchema.post('save', handleMongooseError);

module.exports = model('chat', chatSchema);
