const models = require('../../models');

exports.get_products = async (_, res) => {
  try {
    const products = await models.Products.findAll();
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
