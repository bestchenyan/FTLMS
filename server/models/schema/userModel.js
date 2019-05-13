/*
* @Author: lenovo
* @Date:   2018-11-27 11:03:03
* @Last Modified by:   lenovo
* @Last Modified time: 2019-01-09 21:57:48
*/
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	role:String,
    username: String,
    realname:String,
    password: String,
    phone:String,
    email:String,
    polling_area_id:String,
    create_time:String,
    update_time:String,
})

const User = module.exports = mongoose.model('User', userSchema)