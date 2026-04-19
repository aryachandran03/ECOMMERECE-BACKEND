exports.getProducts = async (req, res) => {
  const { name, category } = req.query;

  let filter = {};

  if (name) filter.name = { $regex: name, $options: "i" };
  if (category) filter.category = category;

  const products = await Product.find(filter);
  res.json(products);
};