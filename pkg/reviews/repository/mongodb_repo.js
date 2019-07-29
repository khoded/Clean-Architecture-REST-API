const reviewModel = require('../../../model/review');

class reviewRepository {
    async createReview(payload) {
        try {
            const data = await reviewModel.create(payload);
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    async getReviews() {
        try {
            const reviews = await reviewModel.find();
            return reviews
        } catch (error) {
            throw new error
        }
    }

    async getReview(reviewID) {
        try {
            const review = await reviewModel.findById(reviewID);
            return review
        } catch (error) {
            throw new error
        }
    }


    async updateReview(reviewID, update) {
        try {
            const review = await reviewModel.findByIdAndUpdate(reviewID, { $set: update });
            return review
        } catch (error) {
            throw new error
        }
    }


    async deleteReview(reviewID, update) {
        try {
            const review = await reviewModel.findByIdAndDelete(reviewID);
            return review
        } catch (error) {
            throw new error
        }
    }
}

module.exports = reviewRepository;