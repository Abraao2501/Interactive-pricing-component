const rangeInput = document.querySelector('.range')
const pageViews = document.querySelector('#page-views')
const priceNumberTxt = document.querySelector('.priceNumber')

rangeInput.value = 100

rangeInput.addEventListener('click', () => {
   let valueRange = rangeInput.valueAsNumber

   let views = valueRange
   let price = (views * 16) / 100
   
   pageViews.innerHTML = `${views}K PAGEVIEWS`
   priceNumberTxt.innerHTML = `$${price}`
   
})



