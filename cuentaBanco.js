import { clienteBanco } from "./clienteBanco.js";

export class cuentaBanco {
    #cliente;
    agenciaCuenta;
    static cantidadCuenta = 0;
    numeroCuenta;
    #saldoCuenta;

    constructor(cliente, agenciaCuenta, numeroCuenta) {
        this.cliente = cliente;
        this.agenciaCuenta = agenciaCuenta;
        cuentaBanco.cantidadCuenta++;
        this.numeroCuenta = numeroCuenta;
        this.#saldoCuenta = 0;
    }

    set cliente(valor){
        if (valor instanceof clienteBanco) {
            this.#cliente = valor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    deposito(valor) {
        if (valor > 0) {
            this.#saldoCuenta += valor;
        }
        return this.#saldoCuenta;
    }

    retiro(valor) {
        if (valor <= this.#saldoCuenta) {
            this.#saldoCuenta -= valor;
        }
        return this.#saldoCuenta;
    }

    tranferencia(valor, cuentaDestino) {
        this.retiro(valor);
        cuentaDestino.deposito(valor);
        
        return this.#saldoCuenta;
    }

    verSaldo() {
        return this.#saldoCuenta;
    }
}