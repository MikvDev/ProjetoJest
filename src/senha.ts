export class Senha {
    digitosSenha: string;
    
    constructor(digitosSenha:string){
        this.digitosSenha = digitosSenha;
    }
    validarSenha():boolean{
        if(this.digitosSenha.length > 8)
            throw new Error("A senha deve possuir no máximo 8 caracteres");    
        if(this.digitosSenha.length < 8)
            throw new Error("A senha deve possuir no minimo 8 caracteres");    
        

        return true
    }
    verificarDigitos():boolean{
        let temNumero = false;
         for(let letra of this.digitosSenha)
                if(!Number.isNaN(Number(letra)))
                    temNumero = true;
        if(!temNumero)
                throw new Error("Senha deve possuir pelo menos 1 digito")
                
         return true;
            

    }

}

const senha = new Senha("Abcdef14") 

