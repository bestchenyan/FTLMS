
const mongoose = require('mongoose')
const faultSchema = mongoose.Schema({
    zigbee_dev_id:String,
    fault_location: String,
    fault_name:String,
    fault_message: String,
    fault_serviceman_id:String,
    fault_area_id:String,
    fault_state:String,
    is_emergent:String,
    start_time:String,
    end_time:String,
    create_time:String,
    update_time:String,
})

const Fault = module.exports = mongoose.model('Fault', faultSchema)