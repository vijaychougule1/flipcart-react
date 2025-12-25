const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4 cursor-pointer">
      
      {/* Product Image */}
      <div className="h-44 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
        {product.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">
          {product.rating} ★
        </span>
        <span className="text-xs text-gray-500">
          ({product.reviews})
        </span>
      </div>

      {/* Price Section */}
      <div className="mt-3">
        <span className="text-lg font-semibold text-gray-900">
          ₹{product.price}
        </span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through ml-2">
            ₹{product.originalPrice}
          </span>
        )}
      </div>

      {/* Add to Cart */}
      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
