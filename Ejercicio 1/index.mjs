import esPrimo from './primo.js';
import dotenv from 'dotenv';

dotenv.config();

const numero = process.env.NUMERO;
console.log(`¿El número ${numero} es primo? ${esPrimo(numero)}`);