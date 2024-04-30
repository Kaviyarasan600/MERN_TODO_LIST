import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title : {type :String, require : true, trim : true},
    event : {type :String, require : true, trim : true}
},{timestamps : true})

const POST = mongoose.model('POST',PostSchema)

export default POST;