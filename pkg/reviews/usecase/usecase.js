class reviewUsecase {
    constructor(repo) {
        this.repo = repo;
    }

    async createReview(payload) {
        try {
            const data = await this.repo.createReview(payload)
            return data
        } catch (error) {
            console.log(error)
        }

    }

    async getReviews() {
        try {
            const data = await this.repo.getReviews()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async getReview(reviewID) {
        try {
            const data = await this.repo.getReview(reviewID)
        } catch (error) {
            console.log(error)
        }
    }

    async updateReview(reviewID, update) {
        try {
            const data = await this.repo.updateReview(reviewID, update)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteReview(reviewID) {
        try {
            const data = await this.repo.deleteReview(reviewID)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = reviewUsecase;