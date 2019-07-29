const mongoose = require('mongoose');
const schema = mongoose.Schema

const reviewSchema = new schema( {
    DateCreated:{
        type: Date, 
        required: true,
        default: new Date
    },

    author: {
        type: String,
        required: true
    },

    product: {
        id: mongoose.Types.ObjectId,
        name: String
    },

    store: {
        id: mongoose.Types.ObjectId,
        name: String
    }
})

module.exports = mongoose.model('reviews', reviewSchema);