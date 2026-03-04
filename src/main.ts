import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { userClass } from "./bases/04_classes.ts";
import { RickApiAdapter } from "./bases/api/rickApi.adapter.ts";
import { Usuario } from "./bases/05_inyeccion_Dependencias.ts";

const httpAdapter = new RickApiAdapter();
const usuario = new Usuario(1, "Diego", 34, httpAdapter);
async function loadData() {
  const dataRM = await usuario.getCharacter(77);
  // const urlimage = await userClass.getMoves();


  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
      <h2>${userClass.nombre} : ${userClass.edad}</h2>
      <h2>${userClass.imageUrl}</h2>
      
      
    <h1>Objeto usando Rick y Morty con Inyección de dependencias</h1>
      <p>${usuario.saludar()}</p>
      <p>Personaje: ${dataRM.name} (id: ${dataRM.id})</p>
      <img src="${dataRM.image}" alt="${dataRM.name}">
      

      
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  
  </div>`;
}
loadData();

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);