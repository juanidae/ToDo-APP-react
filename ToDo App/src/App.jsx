import React from "react";
import imagen from "./assets/menu.svg";
import imagenAlert from "./assets/campana.svg";
import imagenpregunta from "./assets/pregunta.svg";
import imagenUser from "./assets/user.svg";
import "./App.css";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md flex-wrap">
        <figure>
          <img src={imagen} alt="Menu" className="w-8 h-8" />
        </figure>
        <nav>
          <ul>
            <li>
              <a href="/">Espacios de trabajo</a>
            </li>
            <li>
              <a href="/Reciente">Reciente</a>
            </li>
            <li>
              <a href="/Marcado">Marcado</a>
            </li>
            <li>
              <a href="/Mas">Mas</a>
            </li>
            <li>
              <button className="btn">+</button>
            </li>
          </ul>
          <input
            type="text"
            placeholder="🔍︎ Buscar"
            className="w-64 pl-2 py-1 border rounded"
          />
        </nav>
        <section>
          <figure>
            <img src={imagenAlert} alt="Alert" className="w-8 h-8" />
          </figure>
          <figure>
            <img src={imagenpregunta} alt="Question" className="w-8 h-8" />
          </figure>
          <figure>
            <img src={imagenUser} alt="User" className="w-8 h-8" />
          </figure>
        </section>
      </header>
      <main></main>
      <footer></footer>
    </>
  )

}

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="content p-4">
        <h1 className="text-2xl font-bold">Bienvenido a tu ToDo App</h1>
        <p className="mt-2">Aquí podrás gestionar tus tareas de manera eficiente.</p>
      </section>
    </div>
  );
}

export default App;
