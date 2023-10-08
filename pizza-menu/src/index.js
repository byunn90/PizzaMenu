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
      {/*Note This mapping data is very important dont forget   */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : null}

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
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>Price: ${props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHours && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed");
  return (
    <footer className="footer">
      <div className="order">
        {isOpen && (
          <p>
            =We're open untill {closeHour}:00. Come visit us or order online.
          </p>
        )}
      </div>
      <button className="btn">Order</button>
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}
const Test = () => {};

// This is how we render how app in the dom ⬇
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
