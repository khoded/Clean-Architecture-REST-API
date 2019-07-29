const reviewDelivery = require('./delivery/http/routes/routes');
const repo = require('./repository/mongodb_repo');
const usecase = require('./usecase/usecase');

//register service
const repoInstance = new repo();
const usecaseInstance = new usecase(repoInstance);
reviewDelivery.newDelivery(usecaseInstance)

module.exports = {
    reviewService: reviewDelivery.api
}