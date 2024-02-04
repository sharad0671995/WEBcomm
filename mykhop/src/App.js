import { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import ProductList from "./Component/ProductList";
import CartLL from "./Component/CartLL";

function App() {
  const [product, setproduct] = useState([
    {
      name: "TowelPP",
      Category: "Hounder",
      price: 1233,
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
    },
    {
      name: "TEasskk",
      Category: "black",
      price: 1033,
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-cartoon-netwrok-1024x683.jpg",
    },
    {
      name: "Roselll",
      Category: "brown",
      price: 90000,
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8369_img_worlds_of_adventure-big1613913163.jpg-1024x683.webp",
    },
    {
      name: "Blueberry",
      Category: "white",
      price: 1203,
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1536x864.webp",
    },
    {
      name: "Prokkk",
      Category: "Blue",
      price: 1283,
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
    },
  ]);

  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, data]);
  };
  return (
    <div>
      <Header />
      <CartLL cart={cart}></CartLL>
      <ProductList product={product} addToCart={addToCart}></ProductList>
    </div>
  );
}

export default App;
