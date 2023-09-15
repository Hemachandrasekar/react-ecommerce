const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post("/payment", (req, res) => {
    // const headers = {
    //     Authorization: `Bearer ${process.env.STRIPE_KEY}`
    // };
    console.log("secret key", process.env.STRIPE_KEY)
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).json(stripeErr)
            console.log("secret key eror", stripeErr)

        } else {
            res.status(200).json(stripeRes)
            console.log("secret key response", stripeRes)

        }
    })
})
module.exports = router;