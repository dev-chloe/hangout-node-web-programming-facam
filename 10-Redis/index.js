const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
})

client.hmset('fruit', {
  lemon: 5000,
  green: 4000
});

client.hmgetall('fruit', ( err, res ) => {
  console.log(res)
})