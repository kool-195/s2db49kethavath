const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
watch_name: String,
watch_color: String,
watch_cost: Number
})
module.exports = mongoose.model("watch", watchSchema)