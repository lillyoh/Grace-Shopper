import React from 'react'
import {connect} from 'react-redux'
import {setProductThunk} from '../store/singleProduct'
import {addProductThunk} from '../store/cart'

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.setProduct(id)
  }

  render() {
    const {product, user} = this.props
    return (
      <div className="single-product-page">
        <img src={product.imageUrl} />
        <div className="single-product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}.00</h3>
        </div>
        <button
          type="submit"
          onClick={() => this.props.addProduct(product.id, user.id)}
        >
          Add To Cart
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setProduct: id => dispatch(setProductThunk(id)),
  addProduct: (productId, userId) =>
    dispatch(addProductThunk(productId, userId))
})

const mapStateToProps = state => ({
  product: state.product,
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
