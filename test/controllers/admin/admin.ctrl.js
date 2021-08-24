const models = require('../../models');

exports.get_products = (_, res) => {
  models.Products.findAll({

  // }).then( (products) => {
  //   res.render('admin/products.html', { products : products }) // 같은 이름은 아래처럼 한번만 써도 된다
  // }) 
  }).then( (products) => {
    res.render('admin/products.html', { products })
  })
}

exports.get_products_write = (_, res) => {
  res.render('admin/write.html');
}

exports.post_products_write = (req, res) => {
  // res.send(req.body);

  // 하나 하나 넣을 때
  // models.Products.create({
  //   name: req.body.name,
  //   price: req.body.price,
  //   description: req.body.description
  // }).then(() => {
  //   res.redirect('/admin/products');
  // });

  models.Products.create(req.body).then(() => {
    res.redirect('/admin/products');
  });
  
}

exports.get_products_detail = (req, res) => {
  // req.params.id
  models.Products.findByPk(req.params.id).then( (product) => {
    res.render('admin/detail.html', { product });  
    // console.log(product)
  });
};