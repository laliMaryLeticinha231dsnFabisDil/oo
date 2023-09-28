class Calculadora {
    constructor() {
        //inicializando o visor com valor 0
        this.valor = '0'
    }
    //método para adicionar número
    adicionarNumero(numero) {
        if (this.valor === '0') {
            //se o valor atual for 0 vai substituir
            this.valor = numero

        } else {
            //senãoadicionar o numero no final do valor atuaç
            this.valor += numero
        }
        //atualiza o visor
        this.atualizarVisor()
    }
        adicionarOperacao(operacao) {
            if (
                this.valor.slice(-1) === '+' ||
                this.valor.slice(-1) === '-' ||
                this.valor.slice(-1) === '*' ||
                this.valor.slice(-1) === '/'
            ) {
                //se o ultimo caractere do valor atual for uma operação substitui essa operação nova pela nova operação
                this.valor = this.valor.slice(0, -1) + operacao
            } else {
                //senão adiciona a operação
                this.valor += operacao
            }
            //atualiza o visor
            this.atualizarVisor()
        }
        limpar() {
            //método para limpar
            this.valor = '0'
            this.atualizarVisor()
        }


        resultado() {
            try {
                this.valor = eval(this.valor).toString()
            } catch (e) {
                this.valor = 'Erro'
         
          }
            this.atualizarVisor() 
        }
        
        atualizarVisor(){
            document.getElementById('visor').value = this.valor
        }

    

}
let calculadora = new Calculadora()