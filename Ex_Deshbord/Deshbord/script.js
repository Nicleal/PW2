const ctx1 = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('Gr2').getContext('2d');
const ctx3 = document.getElementById('Gr3').getContext('2d');
const ctx4 = document.getElementById('Gr4').getContext('2d');

const dados1 = {
  labels: ['vermelho', 'azul', 'amarelo', 'verde', 'roxo', 'laranja'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)'
  }]
};

const dados2 = {
  labels: ['vermelho', 'verde', 'amarelo', 'cinza', 'azul'],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};
const dados3 = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [{
    label: 'My Line Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const dados4 = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

new Chart(ctx4, {
  type: 'radar',
  data: dados4,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
});

new Chart(ctx3, {
  type: 'line',
  data: dados3,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx1, {
  type: 'bar',
  data: dados1,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx2, {
  type: 'polarArea',
  data: dados2,
  options: {}
});
