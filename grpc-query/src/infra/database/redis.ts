import Redis, { Redis as RedisClient } from 'ioredis';

export class RedisHelper {
  static redisClient: RedisClient;

  static async getClient(): Promise<RedisClient | any> {
    if (!this.redisClient) {
      this.redisClient = new Redis({
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT) || 6379,
        db: 0,
      });
    }

    return this.redisClient;
  }
}