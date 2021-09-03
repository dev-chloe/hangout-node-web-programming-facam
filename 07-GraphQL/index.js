const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String,
    nodejs: Int
  }
`);

const root = {
  hello : () => 'hellow world',
  nodejs: () => 23
}

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false
}));

app.listen( 4000, () => {
  console.log('running server port 4000');
})