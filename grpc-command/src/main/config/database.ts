import { MongooseHelper }  from "../../infra/database/mongodb"


export default MongooseHelper.getClient().then(() => console.log("mongodb connected")).catch((err) => console.log("mongodb error connection", err) )