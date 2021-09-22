const models = require('../../models');
const redis = require('redis');
const redisClient = redis.createClient(); 
const { promisify } = require("util");

redisClient.on('error', function (err) {
  console.log('Error ' + err);
});

// const getAsync = (key) => new Promise( (resolve , reject ) => {
//   redisClient.get( key , ( err , data) => {
//     if(err) reject(err);
//     if(data){
//       resolve(data);
//     }else{
//       resolve(null);
//     }
//   });
// })

const getAsync = promisify(redisClient.get).bind(redisClient);
// getAsync.then(console.log).catch(console.error);

exports.get_products = async (_, res) => {
  try {
    let results = JSON.parse(await getAsync("products:all"));
    
    // let results = await getAsync("products:all");

    // redisClient.get("products:all", (err, data) => {
    //   if(data) {
    //     results = data;
    //   } else {
    //     results = null;
    //   }
    // })

    console.log(results)
    

    const products = await models.Products.findAll();

    if(!results) {
      results = products;
    }
    res.render('admin/products.html', { products });
  } catch(e) {
    console.error(e)
  }
}

exports.get_products_write = (_, res) => {
  res.render('admin/write.html');
}

exports.post_products_write = async (req, res) => {
  try{
    await models.Products.create(req.body);
    
    const products = await models.Products.findAll();
    redisClient.set( "products:all" , JSON.stringify(products))

    res.redirect('/admin/products');
  } catch(e) {
    console.error(e)
  }
}

exports.get_products_detail = async (req, res) => {
  try{
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/detail.html', { product });  
  } catch(e) {
    console.error(e)
  }
};

exports.get_products_edit = async (req, res) => {
  try{
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/write.html', { product });  
  } catch(e) {
    console.error(e)
  }
};

exports.post_products_edit = async (req, res) => {
  try{
    await models.Products.update(
      req.body,
      {
      where: { id: req.params.id }
    })
    res.redirect('/admin/products/detail/' + req.params.id);
  } catch(e) {
    console.error(e)
  }
};

exports.get_products_delete = async (req, res) => {
  try{
    await models.Products.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect('/admin/products')
  } catch(e) {
    console.error(e)
  }
};
