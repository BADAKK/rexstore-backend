const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    zoneId: { type: String, default: '' },
    gameId: { type: String, required: true },
    denomId: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'success', 'failed', 'expired', 'cancelled'], 
        default: 'pending' 
    },
    rawNotification: { type: Object, default: {} }
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Transaction', transactionSchema);
