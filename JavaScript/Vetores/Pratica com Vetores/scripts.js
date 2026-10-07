/*let valores = [];

const addValor = (x) => {
  valores.push(valores.length + 1, x);
}

const media = () => {
  let soma = 0;
  for (x of valores){
    soma += x[1];
  } 
  return soma/ valores.lenght;
}

const drawBasic = () =>{
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Pos');
  data.addColumn('number', 'X');
  data.addRows(valores);
  var options = {hAxis: {title: 'Posição'}, vAxis: {title: 'Valor de X'}};

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}*/

let valores = [];

const addValor = (x) => {
  // Correção: Insere um array [posição, valor] dentro da lista 'valores'
  // Correção do typo: valores.length (com 'th')
  valores.push([valores.length + 1, x]);
};

const media = () => {
  // Evita divisão por zero caso o array esteja vazio
  if (valores.length === 0) return 0;

  let soma = 0;
  for (let x of valores) {
    soma += x[1]; // Pega o valor armazenado no índice 1 do par [posição, valor]
  }

  // Correção do typo: valores.length
  const resultado = soma / valores.length;
  
  // Retorna formatado com 2 casas decimais
  return resultado.toFixed(2);
};

const drawBasic = () => {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Pos');
  data.addColumn('number', 'X');
  
  // Como 'valores' agora é [[1, v1], [2, v2]], o addRows aceita diretamente
  data.addRows(valores);

  var options = {
    title: 'Evolução dos Valores',
    hAxis: { title: 'Posição' },
    vAxis: { title: 'Valor de X' },
    legend: 'none'
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
};