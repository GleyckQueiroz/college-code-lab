const imc = (peso, altura) => peso / (altura * altura);
const situacao = (valor_imc) => {
  if(valor_imc<18.5){
    return "Abaixo do peso";
    }else if(valor_imc<25){
      return "Peso ideal (parabéns)";
    }else if(valor_imc<30){
      return "levemente acima do peso";
    }else if(valor_imc<35){
      return "obesidade de grau 1";
    }else if(valor_imc<40){
      return "Obesidade de grau 2 (severa)";
    }else{
      return "obesidade de grau 3 (mórbida)";
    }
}