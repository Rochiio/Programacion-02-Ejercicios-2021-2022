import chalk from 'chalk';
/**
 * Funcion que devuelve el area 
 * @param num Numero para saber si es positivo o negativo
 * @returns si el numero es positivo o negativo
 */

import { channel } from "diagnostics_channel";

function esPositivo(num:number):void {
    let positivo: boolean = true;

    if(num<0){
        console.log(chalk.blueBright("El numero " + num + " es negativo"));
        positivo = false;
    }else {
        console.log(chalk.blueBright("El numero " + num + " es positivo"));
        positivo = true;
    }    
}



//Exportación funciones y procedimientos
export default {esPositivo};
