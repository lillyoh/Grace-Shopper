const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const OrderHistory = require('./order-history')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
//puts the user id on the order, can use getOrders methods on User to find previous orders
Order.belongsTo(User)
User.hasMany(Order)

// can use GetProducts method  on Order to find order history of a specific order
Order.belongsToMany(Product, {through: 'order_history'})
Product.belongsToMany(Order, {through: 'order_history'})
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Order,
  Product,
  OrderHistory
}
