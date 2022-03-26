import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from './Components/Shop/Shop';
import QuesAns from './Components/QuesAns/QuesAns';

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
      <h1 className='text-primary my-5'>Samsung Smart Shop</h1>
      <Shop products= {products} ></Shop>
      <QuesAns></QuesAns>
    </div>
  );
}

export default App;
