
import './App.css';
import Cart from './Day-8/componets/Cart';
import ProductList from './Day-8/componets/ProductList';
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Smartphone', price: 499 },
];
function App() {
  return (
    <div className="App">
        <h1>E-Commerce Store</h1>
        <ProductList products={products} />
    </div>
  );
}

export default App;
