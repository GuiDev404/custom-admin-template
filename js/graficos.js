const canvasElement = document.getElementById('histograma');
const btn_download = document.getElementById('download_img_grafico');

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};


function randomData() {
  return Math.round(Math.random() * 100);
}

function histograma (ctx) {
  let chart = new Chart(ctx, {
    type: 'bar',
    
    data: {
      labels: meses,
      datasets: [{
        label: "Ventas",
        borderColor: 'transparent',  
        fill: true,
        backgroundColor: Chart.helpers.color(chartColors.blue).alpha(0.5).rgbString() ,
        data: [randomData(),randomData(), randomData(), randomData(), randomData(), randomData(), randomData(),randomData(),randomData(),randomData(),randomData(),randomData()]
      }]
    },
    options: {
      // title: {
      //   display: true,
      //   text: 'Ventas en el año',
      //   fontSize: 20,
      //   yPadding: 10,
      //   fontColor: 'royalblue'
      // },
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 30,
          fontFamily: 'monospace'
        }
      },
      layout: {
        padding: {
          top: 10,
          left: 10,
          right: 30
        }
      },
      tooltips: {
        titleFontSize: 17,
        xPadding: 5, 
        yPadding: 5,
        bodyFontSize: 15,
        bodySpacing: 10,
        mode: 'x' 
      }
    }
  })
}

function renderizarGrafico() {
  const ctx = canvasElement.getContext('2d');
  histograma(ctx);
}

renderizarGrafico();

function downloadImage() {
  let url = canvasElement.toDataURL('image/jpeg', 1.0)
  btn_download.download = 'grafico_anual.jpg'
  btn_download.href = url;
}


btn_download.addEventListener('click', downloadImage);