import logo from './logo.svg';
import './App.css';
import Loja from './loja/loja';
import { Routes, Route, Link } from "react-router-dom";
import Carrinho from './loja/carrinho';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Loja />} />
        <Route path="carrinho" element={<Carrinho />} />
      </Routes>
    </div>
  );
}

export default App;
