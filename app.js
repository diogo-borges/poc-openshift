const mongoose = require('mongoose');
const fastify = require('fastify')();

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

const db_name = 'openshiftDB'

const mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;

if (process.env.OPENSHIFT_MONGODB_DB_URL) {
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}

fastify.get('/', (req, res) => {
  res.send({ Hello: "World!" })
})

fastify.listen(8080, '172.30.80.98', function () {
  console.log("Listening on " + server_ip_address + ", port " + server_port)
});

// Connect to the db
mongoose.connect(mongodb_connection_string, function (err) {
  if (err) console.log(err)

  console.log('Connected in DB by Diogo');
  const usersSchema = new mongoose.Schema({
    name: { type: String }
  });

  const User = mongoose.model('User', usersSchema);

  User.create({ name: 'teste' }).then(() => console.log('user Created by Diogo'))
});




