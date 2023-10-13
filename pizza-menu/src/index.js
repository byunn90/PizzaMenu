import React from "react";
import ReactDOM from "react-dom/client";
import spinaciPizza from "../src/images/spinaci.jpg";
import fungiPizza from "../src/images/funghi.jpg";
import focaccia from "../src/images/focaccia.jpg";
import margherita from "../src/images/margherita.jpg";
import salamino from "../src/images/salamino.jpg";
import prosciutto from "../src/images/prosciutto.jpg";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaciPizza,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: fungiPizza,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const myStyle = {
  //   color: "red",
  //   fontSize: "42px",
  //   textTransform: "uppercase",
  // };
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later 😆</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, Mozarella, spinach, and ricotta Cheese"
        photoName={spinaciPizza}
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mozarella, spinach, and ricotta Cheese"
        price={12}
        photoName={fungiPizza}
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>Price: ${pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer(props) {
  console.log(props);
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHours && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed");
  // if (!isOpen) return <p>CLOSED</p>;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>

      <button className="btn">Order</button>
    </div>
  );
}

// This is how we render how app in the dom ⬇
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
