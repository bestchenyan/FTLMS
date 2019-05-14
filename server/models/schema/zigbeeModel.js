
const mongoose = require('mongoose')
const zigbeeSchema = mongoose.Schema({

    device_location: String,
    device_type:String,
    last_data: String,
    last_time:String,
    device_status:String,
    fault_event:String,
})

const Zigbee = module.exports = mongoose.model('Zigbee', zigbeeSchema)