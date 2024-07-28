module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const schema = strapi.getModel("api::chat-message.chat-message");

    const { room, content, type } = result;

    console.log("message : ", result);
    if (type === "join") {
      strapi.$io.raw({
        event: `${room}:members`,
        data: room,
      });
    }
    if (type === "leave") console.log("a user left");

    if (type === "message") {
      strapi.$io.raw({
        event: `${room}:message`,
        data: result,
      });
    }
  },
};
