process.on("message", (msg) => {
  console.log(msg)
})

sp1.send({ msg: "hello from app.js 2" })
sp1.send({ msg: "hello from app.js 3" })
