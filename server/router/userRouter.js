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
let detectInfo = function (req) {
    return User.find({username: req.body.username}).then(data => {
        if (data.length === 0) {
            return (req.body)
        } else {
            throw new Error('username existed')
        }
    })
}
router.post('/user/signIn', (req, res) => {
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
router.post('/user/signUp', (req, res) => {
    detectInfo(req).then(response => {
        const user = new User(response)
        user.save(()=>{
            res.jsonp({
                data: user
            })
        }, err => {
            res.status(400).send({
                error: error
            })
        })
    }, error => {
        res.status(400).send({
            error: error.message
        })
    })
})
router.get('/user/getManage',(req,res) =>{
    User.find({ role: '1', })
        .then(data => {
            res.jsonp(data)
        })
        .catch(err =>{
            res.jsonp(err)
        })

})
router.get('/user/getInspection',(req,res) =>{
    User.find({ role: '2', })
        .then(data => {
            res.jsonp(data)
        })
        .catch(err =>{
            res.jsonp(err)
        })

})
router.delete('/user/:id', (req, res) => {
    User.findOneAndRemove({
        _id: req.params.id
    })
        .then(data => res.send(`${data.username}删除成功`))
        .catch(err => res.json(err))
})
module.exports = router