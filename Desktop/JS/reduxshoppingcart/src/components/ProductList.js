import PropTypes from 'prop-types'

const ProductList = ({title,childern}) => (
    <div>
        <h3>{title}</h3>
        <div>{childern}</div>
    </div>
)


ProductList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
  }
  
  export default ProductList;