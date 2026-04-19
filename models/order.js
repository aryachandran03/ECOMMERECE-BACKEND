exports.createOrder = async (req, res) => {
  const order = await Order.create({
    user: req.user.id,
    products: req.body.products
  });

  res.json(order);
};