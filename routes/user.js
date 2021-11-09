
const express = require('express')
const router = express.Router()
// const router = express.Router([options])

router.get('/', (req, res)=> {
	res.json({path: 'user'})
})

router.get('/count', (req, res)=> {
	res.json({count: 100})
})

module.exports = router
