const widthInput = document.querySelector('#width')
const heightInput = document.querySelector('#height')
const colorInput = document.querySelector('#color')

widthInput.addEventListener('change', update)
heightInput.addEventListener('change', update)
colorInput.addEventListener('change', update)

widthDisplay.innerHTML = '50px'
heightDisplay.innerHTML = '50px'
colorDisplay.innerHTML = "#000000"

const canvas = document.getElementById('canvas');
canvas.style.width = '50px'
canvas.style.minHeight = '50px'
canvas.style.backgroundColor = colorInput.value;
update(e)
drawBox()

function update(e) {
    widthDisplay.innerHTML =  (`${widthInput.value}px`)
    heightDisplay.innerHTML =  (`${heightInput.value}px`)
    colorDisplay.innerHTML =  (`${colorInput.value}`)
    drawBox()
    console.log(`${widthInput} ${widthInput.value}`)
}

function drawBox() {
    canvas.style.backgroundColor = colorInput.value;
    canvas.style.width = widthInput.value+'px';
    canvas.style.minHeight = heightInput.value+'px';
  }