import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductCard from './components/ProductCard/ProductCard'
import products from './data/products'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
