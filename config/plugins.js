const active = [];

module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      contentTypes: ["api::chat-user.chat-user"],
      socket: {
        serverOptions: {
          cors: { origin: process.env.FRONTEND_URL, credentials: true },
        },
      },
    },
  },
});
