
const express = require('express')
const router = express.Router()
const Fault = require('../models/schema/faultModel')
// 获取所有故障
router.get('/fault/getFault',(req,res) =>{
    Fault.find({zigbee_dev_id:'1'})
        .then(data => {
            console.log(data)
            res.jsonp(data)
        })
        .catch(err =>{
            res.jsonp(err)
        })
})
//新增故障信息
router.post('/fault/setFault', (req, res) => {
        const fault = new Fault(req.body)
    fault.save(()=>{
            res.jsonp({
                data: fault
            })
        }, err => {
            res.status(400).send({
                error: error
            })
        })

})

module.exports = router