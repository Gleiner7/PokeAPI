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

export class Usuarios {

    constructor(
    public readonly nombre: string,
    public readonly edad: number,
    public readonly telefono?: string,
    public readonly id?: string
    ) {}

    get imageUrl(): string {
    return `https://imagenUser/${this.id ?? "default"}`;
    }

    saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años y mi numero de telefono es ${this.telefono ?? "No registrado"}`;
    }
}

//Crear un objeto tipo Usuario
const userClass = new Usuarios(
    "Diego",
    30,
    "3001234567",
    "123"
);

console.log(userClass.saludar());
console.log(userClass.imageUrl);