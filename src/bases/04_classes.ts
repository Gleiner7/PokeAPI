// export class Usuario {
//     //Propiedades
//     nombre: string;
//     edad: number;

//     //Metodos
//     constructor(nombre: string, edad: number) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(): string {
//         return (`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }
// }

// //Crear un objeto tipo usuario
// export const  userClass = new Usuario ("raul", 23);
// userClass.saludar();

//------------------------------------------------------------------------------------------------------------------------------

import axios from 'axios';
export class Usuario {
  //METODOS
    constructor(
    public id: number,
    public nombre: string,
    public edad: number
    ) { }

    get imageUrl(): string {
    return `https://imagenUser.com${this.id}`;
    }

    saludar(): string {
    return (`Hola, soy ${this.nombre} conn el id ${this.id}`);
    }

    async getMoves() {
    // const moves  = 10;
    const resp = await axios.get('https://rickandmortyapi.com/api/episode');
    console.log(resp);
    //return resp;
    }
}
//Crear un objeto tipo Usuario
export const userClass = new Usuario(1, "Diego", 34);

userClass.getMoves();