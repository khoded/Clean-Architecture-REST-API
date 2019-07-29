class handlers {
    constructor(usecase) {
        this.name = "jerry"
        this.usecase = usecase
    }

    async createReview(req, res) {
        const payload = req.body;
        const data = await this.usecase.createReview(payload)
        res.json(req.body)
    }
}

module.exports = handlers;