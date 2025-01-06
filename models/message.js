const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const messageSchema = new Schema({
    chatId: { type: Schema.Types.ObjectId, ref: 'chat', required: true },
    message: { type: String, required: true },
    datetime: { type: Date, default: Date.now, required: true },
    sender: { type: String, enum: ['user', 'bot'], required: true },
}, {
    versionKey: false,
    timestamps: true
}
);

messageSchema.post('save', handleMongooseError);

module.exports = model('message', messageSchema);
