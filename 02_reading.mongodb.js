use("ecommerce")
db.products.find({ category: "Electronics" })

db.orders.find({ price : { $gt: 5000 } }) // Find orders with total price greater than 5000
//$gt means greater than
// $lt means less than
// $gte means greater than or equal to
// $lte means less than or equal to

// logical operators
db.products.find({ $and: [ { stock: { $gt: 50 } }, { ratings: { $gte: 4.5 } } ] })
// Projection (Select Specific Fields)
db.products.find({ category: "Electronics" }, { name: 1, price: 1, _id: 0 })
// Sorting
db.products.find().sort({ price: -1 }) // Sort by price in descending order