const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handling GET request to /test"
    })
})

router.post('/', (req, res, next) => {
    const testItem = {
        name: req.body.name
    }
    res.status(200).json({
        message: "handling POST request to /test",
        createdProduct: testItem
    })
})

router.get('/:testId', (req, res, next) => {
    const id = req.params.testId
    if (id === 'special'){
        res.status(200).json({
            message: `the id is: ${id}`
        })
    }else {
        res.status(200).json({
            message: `wack`
        })
    }
})

module.exports = router