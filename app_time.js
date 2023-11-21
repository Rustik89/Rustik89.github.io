let mode = 'time'

const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name) {
  return function () {
    mode = name
    update()
  }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

update()

setInterval(update, 100)

function update() {
  output.textContent = format(mode)
}

function format(formatMode) {
  const now = new Date()

  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString()
    case 'date':
      return now.toLocaleDateString()
    case 'full':
      return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    default:
      return now.toLocaleTimeString()
  }
}

const imageList = ['sancho.png', 'ron.png']

const img = document.querySelector('.img__arr')
const next = document.querySelector('#next')

let numImage = 0

img.src = imageList[numImage]

next.addEventListener('click', () => {
  numImage++
  if (numImage >= imageList.length) {
    numImage = 0
  }
  console.log(numImage >= imageList.length)
  console.log(numImage)
  img.src = imageList[numImage]
})
