import { execFile } from "child_process";
import mongoose from "mongoose";
import TuitSchema from "./TuitSchema"

const TuitModel = mongoose.model('tuitModel', TuitSchema)

export default TuitModel