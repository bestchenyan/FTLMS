
const express = require('express')
const router = express.Router()
const Zigbee = require('../models/schema/zigbeeModel')
// 获取所有故障
router.get('/zigbee/getZigbee',(req,res) =>{
    Zigbee.find()
        .then(data => {
            res.jsonp(data)
        })
        .catch(err =>{
            res.jsonp(err)
        })

})
router.delete('/zigbee/:id', (req, res) => {
    Zigbee.findOneAndRemove({
        _id: req.params.id
    })
        .then(data => res.send(`${data.username}删除成功`))
        .catch(err => res.json(err))
})

module.exports = router