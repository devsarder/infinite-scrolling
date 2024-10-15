export default function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            ${product.price}
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
