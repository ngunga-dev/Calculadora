class Display {
    constructor(displayValorAnterior,displayValorAtual){
        this.displayValorAtual=displayValorAtual;
        this.displayValorAnterior=displayValorAnterior;
        this.calculadora= new Calculadora();
        this.TipoOperacao=undefined;
        this.ValorAtual='';
        this.ValorAnterior='';
        this.sinais={
            somar:'+',
            dividir:'/',
            multiplicar:'x',
            subtrair:'-',
        }
    }
    apagar(){
        this.ValorAtual=this.ValorAtual.toString().slice(0,-1);
        this.imprimirValores();
    }
    apagarTudo(){
        this.ValorAtual='';
        this.ValorAnterior='';
        this.TipoOperacao=undefined;
        this.imprimirValores();
    }
    computar(tipo){
        this.TipoOperacao!=='igual' && this.calcular();
        this.TipoOperacao=tipo;
        this.ValorAnterior=this.ValorAtual|| this.ValorAnterior;
        this.ValorAtual='';
        this.imprimirValores();
    }
    agregarNumero(numero){
        if(numero==='.' && this.ValorAtual.includes('.')) return;
        this.ValorAtual=this.ValorAtual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores() {
        this.displayValorAtual.textContent= this.ValorAtual;
        this.displayValorAnterior.textContent=` ${this.ValorAnterior} ${this.sinais[this.TipoOperacao] || ''}`;
    }

    calcular(){
        const valorAnterior=parseFloat(this.ValorAnterior);
        const valorAtual=parseFloat(this.ValorAtual);

        if(isNaN(valorAtual) || isNaN(valorAnterior)) return;
        this.ValorAtual=this.calculadora[this.TipoOperacao](valorAnterior,valorAtual);
    }
}