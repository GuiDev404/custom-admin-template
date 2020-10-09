const fecha = document.getElementById('fecha');
const btn_month = document.getElementById('month');
const h3_sm_cards = document.querySelectorAll('.small-card__info > h3');

function getMonth (format) {
  return new Date().toLocaleDateString(undefined, { month: format });   
}

window.addEventListener('DOMContentLoaded', ()=> {
  // Poner fecha actual

  setInterval(()=> {
    fecha.innerHTML = new Date().toLocaleString();
  },1000)

  // Cambiar el mes actual

  btn_month.innerText = btn_month.innerText.replace(/Mes/g, getMonth('long').trim());
  h3_sm_cards.forEach(ele=> {
    ele.innerHTML = ele.innerHTML.replace(/Mes/g, getMonth('short').trim())
  })

})

// toastr.error("Campos vacios", "Los campos son obligatorios")

// toastr.options = {
//   "closeButton": false,
//   "debug": false,
//   "newestOnTop": true,
//   "progressBar": true,
//   "positionClass": "toast-top-right",
//   "preventDuplicates": false,
//   "onclick": null,
//   "showDuration": "300",
//   "hideDuration": "1000",
//   "timeOut": "5000",
//   "extendedTimeOut": "1000",
//   "showEasing": "swing",
//   "hideEasing": "linear",
//   "showMethod": "fadeIn",
//   "hideMethod": "fadeOut"
// }