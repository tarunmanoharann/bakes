import Navbar from "./components/Navbar"
import PromoBar from "./components/Promobar"
import ProductList from "./components/ProductList"
import DefaultProducts from "./components/DefaultProducts"


function App() {
  
  return (
    <div className="App">
    <header>
      <PromoBar />
      <Navbar />
    </header>
    <main>
        <DefaultProducts />
        <ProductList />
        {/* Other components */}
      </main>
  </div>
  )
}

export default App
