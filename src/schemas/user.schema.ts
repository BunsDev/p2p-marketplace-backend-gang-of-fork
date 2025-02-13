import { Schema } from "../../deps.ts";
import { Bson } from "../../deps.ts";

const userSchema = new Schema({
    publicAddress: {type: String, required: true},
    offers: [ { type: Bson.ObjectId } ]
})

export default userSchema

