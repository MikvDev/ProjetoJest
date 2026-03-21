import { Senha } from "../src/senha";

describe("Testes validar senha", () =>{
    test("senha valida", () => {
        const senhaValida = new Senha("12345678");
        expect(senhaValida.validarSenha()).toBe(true);
    })
    test("senha inválida", () => {
        const senhaInvalida = new Senha("8765s");
        expect(() => senhaInvalida.validarSenha()).toThrow("A senha deve possuir no minimo 8 caracteres") 
    })
    test("senha possui pelo menos 1 número", () => {
        const senhaComNumero = new Senha("qqqqqqq1") 
        expect( senhaComNumero.verificarDigitos()).toBe(true)
    })
    test("senha não possui pelo menos 1 número", () => {
        const senhaSemNumero = new Senha("AAAAAAAA");
        expect(() => senhaSemNumero.verificarDigitos()).toThrow("Senha deve possuir pelo menos 1 digito")
    })
})