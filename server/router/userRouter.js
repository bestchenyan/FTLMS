/*
 * @Author: lenovo
 * @Date:   2018-11-27 11:04:11
 * @Last Modified by:   lenovo
 * @Last Modified time: 2019-01-09 21:59:02
 */
const express = require('express')
const router = express.Router()
const User = require('../models/schema/userModel')
// 查询所有用户

router.post('/user', (req, res) => {

    User.find({ username: req.body.username, password: req.body.password })
        .then(data => {
            if (data.length == 0) {
                res.status(400).send({
                    message: '用户不存在'
                })
            } else {
                res.jsonp({
                    username: data[0].username,
                    role: data[0].role
                })
            }
        }, err => {
            res.status(400).send({
                message: err.message
            })
        })
})
module.exports = router