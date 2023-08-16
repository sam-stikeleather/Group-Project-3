const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSpendingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalSpent: {
    type: Number,
    default: 0,
  },
});

const UserSpending = mongoose.model('UserSpending', userSpendingSchema, 'userspendings');

module.exports = UserSpending;
