export interface user {
    nombre: string;
    edad: number;
    activo: boolean;
}

const diego: user = {
    nombre: "diego",
    edad: 23,
    activo: true
}

const juan: user = {
    nombre: "juan",
    edad: 23,
    activo: true
}

export const users: user[] = [];

users.push(diego,juan);

console.log(users);