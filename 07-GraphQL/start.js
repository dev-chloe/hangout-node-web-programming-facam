const { graphql, buildSchema } = require('graphql');

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

graphql( schema, '{ hello, nodejs }', root ).then( (response) => {
  console.log(response); // { data: [Object: null prototype] { hello: 'hellow world', nodejs: 23 } }
})