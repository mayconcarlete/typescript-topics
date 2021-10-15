const io = require("socket.io")(3003);

io.on("connection", (socket: any) => {
  // either with send()
  socket.send("Hello!");

  // or with emit() and custom event names
  socket.emit("greetings", "Hey!", { "ms": "jane" }, Buffer.from([4, 3, 3, 1]));

  // handle the event sent with socket.send()
  socket.on("message", (data:any) => {
    console.log(data);
  });

});
