
const express = require('express')
const router = express.Router()
const ZigbeeDevice = require('../models/schema/zigbeeModel')
// 获取所有故障

router.get('/zigbee/getZigbee',(req,res) =>{
    console.log(req.body)
    ZigbeeDevice.find().sort({_id: -1}).then(data => {
        res.jsonp({
            data: data
        })

    }).catch(err => {
        console.log(err)
        res.status(400).send({
            message: 'get all articles fail'
        })
    })
})

module.exports = router