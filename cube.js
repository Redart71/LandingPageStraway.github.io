let colorsSelect = Array.from(document.querySelectorAll('.color-select'))
let shapesSelect = Array.from(document.querySelectorAll('.shape-select'))
let carouselSelect = Array.from( document.querySelectorAll('.selectCarousel'))
let currentSelect = document.querySelector('.currentCarousel')
let currentColor = "black"
let currentShape = "cube"

function changeSources() {
  view = ""
  currentSelect.src= generateSource(currentShape,currentColor,view)
  carouselSelect.forEach(carousel=>{
    if(view != "top "){
      carousel.src= generateSource(currentShape,currentColor,view)
      view = "top"
    }else{
      carousel.src= generateSource(currentShape,currentColor,view)
    }
  })
}

function changeCurrentColor(color) {
  currentColor = color
  changeSources()
}

function changeCurrentView(view){
  currentSelect.src = generateSource(currentShape,currentColor,view)
}

function changeCurrentShape(shape){
  currentShape= shape
  changeSources()
}


function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function generateSource(shape,color,view) {
  return `./produit${capitalize(shape)}${view ? capitalize(view) : ""}${capitalize(color)}.png`
}

colorsSelect.forEach(color => {
  color.addEventListener('click',()=> changeCurrentColor(color.dataset.color))
});

carouselSelect.forEach(carousel => {
  carousel.addEventListener('click',()=> changeCurrentView(carousel.dataset.view))
});
shapesSelect.forEach(shape => {
  shape.addEventListener('click',()=> changeCurrentShape(shape.dataset.shape))
});

changeSources()
