import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from './Shop/Shop';

function App() {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  } , []);

  // console.log(products);

  return (
    <div className="App container">
      <h1 className='text-primary my-5'>Smart Shop</h1>
      <Shop products= {products} ></Shop>
    </div>
  );
}

export default App;
