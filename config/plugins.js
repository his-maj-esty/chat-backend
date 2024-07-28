const active = [];

module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      contentTypes: ["api::chat-user.chat-user"],
    },
  },
});
