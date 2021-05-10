const toggle = document.querySelector('.toggle_outer');
const table = document.querySelectorAll('.table');

toggle.addEventListener('change', changePrices);

function changePrices () {
  table.forEach(item=> {
    item.classList.toggle('show_annual');
  }) 
  
}