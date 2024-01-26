// const crypto =  require('crypto');
const axios = require('axios');
const { salt_key, merchant_id } = require('./secret');
const sha256 = require('sha256');


const newPayment = async (req, res) => {
    try {
        const merchantTransactionId = req.body.transactionId;
        const data = {
            merchantId: merchant_id,
            merchantTransactionId: merchantTransactionId,
            merchantUserId: req.body.MUID,
            name: req.body.name,
            amount: req.body.amount * 100,
            redirectUrl: `${process.env.SERVER_URL}/api/payment/status/${merchantTransactionId}`,
            redirectMode: 'POST',
            callbackUrl: `${process.env.SERVER_URL}/api/payment/status/${merchantTransactionId}`,
            mobileNumber: req.body.number,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + salt_key;
        // const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const sha256_val = sha256(string);
        const checksum = sha256_val + '###' + keyIndex;

        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        axios.request(options).then(function (response) {
            // console.log(response.data.data.instrumentResponse.redirectInfo)
            return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url)
        })
            .catch(function (error) {
                console.error(error);
                res.status(500).send({
                    message: error.message,
                    success: false
                })
            });

    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        })
    }
}

const checkStatus = async (req, res) => {
    const merchantTransactionId = res.req.body.transactionId
    const merchantId = res.req.body.merchantId

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
    // const sha256_val = crypto.createHash('sha256').update(string).digest('hex');
    const sha256_val = sha256(string);
    const checksum = sha256_val + "###" + keyIndex;

    const options = {
        method: 'GET',
        url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': `${merchantId}`
        }
    };

    // CHECK PAYMENT TATUS
    axios.request(options)
        .then(async (response) => {
            console.log(response.data)
            if (response.data.success === true) {
                const url = `${process.env.CLIENT_URL}/success?data=${encodeURIComponent(JSON.stringify(response.data.data))}`;
                return res.redirect(url);
            } else {
                const url = `${process.env.CLIENT_URL}/failure`;
                return res.redirect(url);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = {
    newPayment,
    checkStatus
}
