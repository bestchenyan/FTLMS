
const mongoose = require('mongoose')
const zigbeeSchema = mongoose.Schema({
    device_type:String,
    device_location: String,
    fault_name:String,
    last_data: String,
    last_time:String,
    device_status:String,
    fault_event:String,
})

const ZigbeeDevice = module.exports = mongoose.model('ZigbeeDevice', zigbeeSchema)