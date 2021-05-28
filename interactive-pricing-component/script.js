const pageviews = document.querySelector('.view_number');
const cost = document.querySelector('.cost_number');
const slider = document.querySelector('.slider_move')
const billingToggle = document.querySelector('.toggle') ;

const sliderValues = {
  '10K' : 8,
  '50K' : 12,
  '100K' : 16,
  '500K' : 24,
  '1M' : 36,
}

slider.oninput = handleSlider;

billingToggle.onchange = function(){
  updateCost(slider.value)
};

function handleSlider() {
  let sliderPosition = slider.value;
  updateCost(sliderPosition);
  sliderColor(sliderPosition);
}

function updateCost(sliderPosition){
  pageviews.textContent = Object.keys(sliderValues)[sliderPosition];
  
  total = Object.values(sliderValues)[sliderPosition];
  discountTotal = (total - (total *.25));
  
  if(billingToggle.checked) {
    cost.textContent = `$` + discountTotal + `.00`;
  } else {
    cost.textContent = `$` + total + `.00`;
  }

  pageviews.animate([
    {color:'var(--clr-neutral-cta-bg)'},
    {color:'initial'}
  ], 1000)

  cost.animate([
    {color:'var(--clr-primary-slider-bg)'},
    {color:'initial'}
  ], 1500)

}

function sliderColor (sliderPosition) {
  let percent = (sliderPosition) * (100/slider.max) +"%";
  slider.style.background = `linear-gradient( 90deg, var(--clr-primary-slider-bar) ${percent}, var(--clr-neutral-slider-empty-bg)  ${percent})`
}

