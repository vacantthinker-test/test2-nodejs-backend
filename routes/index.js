
const express = require('express')
const router = express.Router()
// const router = express.Router([options])

router.get('/', (req, res)=> {
	res.json({ path: 'index'})
})

module.exports = router
