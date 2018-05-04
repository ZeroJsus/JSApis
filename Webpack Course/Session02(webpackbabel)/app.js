//构建一个动态按钮 使用迭代对象
let buttons = document.querySelectorAll('button')[0]
let body = document.querySelectorAll('body')[0]
function* button() {
    buttons.textContent = "第一步";
    let cont = yield "color:red"
    yield* step()
    buttons.textContent = cont + "第二步";
    yield "color:blue"
}

let generator = button();

function* step() {
    buttons.textContent = '走在草丛中'
    yield "input"
    buttons.textContent = '从草丛中走出来'
    yield "output"
}

// 操作canvas
let canvas = document.getElementById('canvas');
let content = canvas.getContext('2d');

function* transform() {
    content.fillStyle = "red"
    content.beginPath();
    content.moveTo(75,50)
    content.lineTo(100,100)
    content.lineTo(190,190)
    content.fill()
    yield '一根线'
    content.beginPath();
    content.moveTo(150, 150)
    content.lineTo(200, 200)
    content.stroke()
    yield '第二根线'    
}

let trans = transform();

buttons.addEventListener('click',()=>{
    // 更改按钮文字
    // generator.next('这是')
    // 点击进行变形
    trans.next()
})



