/* 
 * author by ZeroJsus
 * @description canvas draw api
 * @addtime 2018-09-07
 * @updatetime 2018-09-07
 */
//<--------------------------以下为api方法------------------------------->
/* 
 * @description canvas的自定义api构造函数
 */
class renderRedient{
    constructor (obj) {
        if(obj instanceof Object && obj.getContext){
            this.ctx = obj.getContext
        }else{
            throw new Error('当前浏览器不支持canvas或您传入的参数不是一个对象')
        }
    }
    /* 
     * @description 绘制一个矩形的方法
     * @author by ZeroJsus
     * @ctx {obj} canvas画布对象
     * @x {number} 起始坐标x
     * @y {number} 起始坐标y
     * @width {number} 矩形宽度width
     * @height {number} 矩形高度height
     * @lineWidth {number} 画笔的宽度
     * @fillColor {string} 填充色
     * @strokeColor {string} 线条色
     */
    drawRect(x, y, width, height, lineWidth, fillColor, borderColor){
        this.ctx.beginPath()
        this.ctx.lineWidth = lineWidth
        this.ctx.strokeStyle = borderColor
        this.ctx.rect(x, y, width, height)
        this.ctx.fillStyle = fillColor
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()
    }
    /*
     * @description 构建渐变状态对象 
     * @author by ZeroJsus
     */
    setTypeRadient(){
        
    }
}
