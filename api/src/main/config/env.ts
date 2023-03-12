export default {
    PORT: process.env.PORT || 3000,
    GRPC_COMMAND_PORT: process.env.GRPC_COMMAND_PORT || 50051,
    GRPC_COMMAND_HOST: process.env.GRPC_COMMAND_HOST || "localhost",
    RABBITMQ_HOST: process.env.RABBITMQ_HOST || "localhost",
    GRPC_QUERY_PORT: process.env.GRPC_QUERY_PORT || 50052,
    GRPC_QUERY_HOST: process.env.GRPC_QUERY_HOST || "localhost"
}