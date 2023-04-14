import { clienteBanco } from "./clienteBanco.js";
import { cuentaBanco } from "./cuentaBanco.js";

//Instanciamos un cliente y cuenta 1
const cliente = new clienteBanco("Jesús Romero", "12345678");
const cuenta = new cuentaBanco(cliente, "BCP", "01");
//console.log(cliente);
//console.log(cuenta);

//Instanciamos un cliente y cuenta 2
const cliente2 = new clienteBanco("María Arévalo", "87654321");
const cuenta2 = new cuentaBanco(cliente2, "BBVA", "02");
//console.log(cliente2);
//console.log(cuenta2);

console.log(cuentaBanco.cantidadCuenta);

/*
//Consultamos el saldo de ambas cuentas
console.log(`El saldo de la cuenta 02 es: ${cuenta.verSaldo()}`);
console.log(`El saldo de la cuenta 02 es: ${cuenta2.verSaldo()}`);

//Depósito de 500 a la cuenta 01
cuenta.deposito(500);
console.log(`\nEl saldo actual de la cuenta 01 es: ${cuenta.verSaldo()}`);

//Transferencia de 200 de la cuenta 01 a la cuenta 02
cuenta.tranferencia(200, cuenta2);
console.log(`El saldo actual de la cuenta 02 es: ${cuenta2.verSaldo()}`);

//Consultamos el saldo de ambas cuentas
console.log(`\nEl saldo de la cuenta 01 es: ${cuenta.verSaldo()}`);
console.log(`El saldo de la cuenta 02 es: ${cuenta2.verSaldo()}`);
*/