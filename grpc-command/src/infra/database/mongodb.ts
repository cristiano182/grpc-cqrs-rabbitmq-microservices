import mongoose from 'mongoose';


export class MongooseHelper {
  static mongooseClient: any;

  static async getClient(): Promise<any> {
    if (!this.mongooseClient) {
      this.mongooseClient = await mongoose.connect('mongodb://mongo:27017');
    }
    return this.mongooseClient;
  }
}

