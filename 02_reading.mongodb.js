use("ecommerce")
db.products.find({ category: "Electronics" })

db.orders.find({ price : { $gt: 5000 } }) // Find orders with total price greater than 5000
//$gt means greater than
// $lt means less than
// $gte means greater than or equal to
// $lte means less than or equal to
