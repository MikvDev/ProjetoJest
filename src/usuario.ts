
export class Usuario  {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome =nome;
        this.idade = idade;
    }

    validar(): boolean{
        if(this.idade == 0)
            throw new Error("idade inválida")
        if(this.idade < 18)
            throw new Error("Menor de idade")
        if(this.nome == "")
            throw new Error("Campo vazio!")
        return true;
        
        
    }
};



