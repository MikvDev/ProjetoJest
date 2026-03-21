import {Usuario} from "../src/usuario"


const gabriela = new Usuario("Gabriela", 18)
describe("Validando Usuario", () =>{
    test("Usuario com dados validos", () => {
        const miguel = new Usuario("Miguel", 18)
        expect(miguel.validar()).toBe(true)
    })
    test("usuario com idade < 18 anos", () => {
        const gabriela = new Usuario("Gabriela",17)
        expect(() => gabriela.validar()).toThrow("Menor de idade");
        
    })
    test("Usuario com idade igual 0", () =>{
        const eduardo = new Usuario("Eduardo", 0)
        expect(() => eduardo.validar()).toThrow("idade inválida")
    })
    test("Usuario com campo de nome vazio", () => {
        const user = new Usuario("", 90);
        expect(() => user.validar()).toThrow("Campo vazio!")
    })
})