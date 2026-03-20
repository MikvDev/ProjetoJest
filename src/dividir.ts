import { error } from "node:console";

export function dividir(a:number, b:number):number{
    
    if(b == 0)
        throw new Error("Divisão por 0")
    return a / b;
}