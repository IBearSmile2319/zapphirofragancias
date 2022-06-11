exports.savePaymentService = (payment) => {
    return new Promise((resolve, reject) => {
        payment.save((err, payment) => {
            if (err) {
                reject(err);
            }
            if (payment) {
                resolve(payment);
            }
        });
    });
}