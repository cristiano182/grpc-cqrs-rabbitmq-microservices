import mongoose, { Connection } from 'mongoose';


export class MongooseHelper {
  static mongooseClient: any;

  static async getClient(): Promise<any> {
    if (!this.mongooseClient) {
      this.mongooseClient = await mongoose.connect('mongodb://localhost:27017/grpc-command', {
       // useNewUrlParser: true,
       // useUnifiedTopology: true,
      })
    }
    return this.mongooseClient;
  }
}

