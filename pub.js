const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883", { clientId: "Ini PC " });
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.on("connect", () => {
  setInterval(() => {
    readline.question(`Light => `, (param) => {
      client.publish("Light", param);
      console.log(`light ${param == 1 ? "ON" : "Off"}`);
    });
  }, 3000);
});
