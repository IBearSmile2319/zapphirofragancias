

exports.saveOrderService = async (newOrder) => {
    return new Promise((resolve, reject) => {
        newOrder.save((err, order) => {
            if (err) {
                reject(err);
            }
            if (order) {
                resolve(order);
            }
        });
    });
}