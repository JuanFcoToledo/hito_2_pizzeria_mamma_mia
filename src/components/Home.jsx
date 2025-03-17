import React from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";

const pizzas = [
  {
    nombre: "Cuatro Quesos",
    precio: 7500,
    ingredientes: ["mozzarella", "parmesano", "gorgonzola", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    nombre: "Pepperoni",
    precio: 6950,
    ingredientes: ["mozzarella", "pepperoni", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  },
];

function Home() {
  return (
    <main className="home">
      <Header />

      <div className="pizza-listado">
        {Array(2) // Para repetir 5 veces el array de pizzas
          .fill(pizzas)
          .flat()
          .map((pizza, index) => (
            <CardPizza key={index} {...pizza} />
          ))}
      </div>
    </main>
  );
}

export default Home;
