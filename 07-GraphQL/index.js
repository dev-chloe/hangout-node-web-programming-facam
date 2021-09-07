const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  input ProductInput {
    name: String
    price: Int
    description: String
  }

  type Product {
    id: ID!
    name: String
    price: Int
    description: String
  }
  type Query {
    getProduct( id: ID! ): Product
  }
  type Mutation {
    addProduct( input: ProductInput ): Product
    updateProduct( id: ID!, input: ProductInput! ): Product
    deleteProduct( id: ID! ): String
  }
`);

const products = [{
  id: 1,
  name: '제품일',
  price: 5000,
  description: '첫번째 제품입니다'
},{
  id: 2,
  name: '제품이',
  price: 10000,
  description: '두번째 제품입니다'
}]

const root = {
  getProduct: ({ id }) => products.find( product => product.id === parseInt(id) ),
  addProduct: ({ input }) => {
    input.id = parseInt(products.length + 1);
    products.push(input);
    return root.getProduct({ id: input.id })
  },
  updateProduct: ({ id, input }) => {
    const index = products.findIndex( product => product.id === parseInt(id) )
    products[index] = {
      id: parseInt(id),
      ...input
    }
    return products[index];
  },
  deleteProduct: ({ id }) => {
    const index = products.findIndex( product => product.id === parseInt(id) )
    products.splice(index, 1)
    return "remove success"
  }
}

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.use('/static', express.static('static'))

app.listen( 4000, () => {
  console.log('running server port 4000');
})