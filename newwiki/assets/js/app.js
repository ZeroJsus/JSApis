(function(){
    // 引入vuejs
    var app = new Vue({
        el: '#app'
    })
    // 内容中标签点击展示
    $("h2[id^='title'],h3[id^=post],h3[id^=get]").on('click',function(){
        if($(this).next().css('display')=='none'){
            if ($(this)[0].tagName == 'H2'){
                $(this).children().css({transform:'rotate(45deg)',transition:'0.5s'})
            }
            $(this).next().css('display','block');
        }else{
            if ($(this)[0].tagName == 'H2') {
                $(this).children().css({ transform: 'rotate(-45deg)', transition: '0.5s' })
            }
            $(this).next().css('display', 'none');            
        }
    })
    // 目录中标签点击展示
    $("a[id^=title]").on('click',function(){
        if ($(this).next().css('display')=='none'){
            $(this).addClass('active')
            // $(this).next().css('display', 'block')
            $(this).parent().siblings().children('ul').css('display','none')
            $(this).parent().siblings().children('a').removeClass('active')
        }else{
            $(this).removeClass('active')
            // $(this).next().css('display', 'none')
        }
    })
    // $("a[id^=title]").next().css('display', 'none')
    // 目录中标签点击展开置顶
    $("a[id^=post],a[id^=get]").on('click',function(){
        var id = $(this).parent().parent().prev().attr('id');
        // 清空class
        $("a[id^=post],a[id^=get]").removeClass('active')
        // 添加class
        $(this).addClass('active')

        // 跳转对应地址加class
        if ($('h2#'+id).next().css('display') == "none"){
            $('h2#' + id).next().css('display', "block")
        }
        var nowid = $(this).attr('id')
        if($('h3#'+nowid).next().css('display') == "none"){
            $('h3#' + nowid).next().css('display','block')
        }
        var top = $('h3#' + nowid).offset().top - 70;
        if(top!=0){
            $('body,html').animate({scrollTop:top},100)
        }
    })
    //干净json折叠
    $("p[class^='appJson']").on('click',function(){
        if($(this).next().css('display')=='none'){
            if ($(this)[0].tagName == 'H2'){
                $(this).children().css({transform:'rotate(45deg)',transition:'0.5s'})
            }
            $(this).next().css('display','block');
        }else{
            if ($(this)[0].tagName == 'H2') {
                $(this).children().css({ transform: 'rotate(-45deg)', transition: '0.5s' })
            }
            $(this).next().css('display', 'none');            
        }
    })

    //复制粘贴的逻辑
        //粘粘连接

    new ClipboardJS('button[class^="link"]',{
        text:function(trigger){
            return $(trigger).siblings('strong').text()
        }
    })
        //粘粘json
    new ClipboardJS('button[class^="puremanager"]', {
        text: function (trigger) {
            console.log($(trigger).parent().next().text())
            return $(trigger).parent().next().text()
        }
    })

    // 监听每个元素的scrolltop
    window.onwheel = function(e){
        // 不可见的距离
        var scrolltop = $('html,body').scrollTop() + 65;
        // 页面的整体高度
        var pageheight = window.screen.availHeight - 170;
        var state = true;
        $('h3[id^="post"]').each(function(){
            // 将当前active切换到下一个
            // console.log(index)
            if (e.deltaY > 0) {
                console.log('下拉')
                console.log(scrolltop)
                console.log($(this).offset().top)
                if (scrolltop + 70 > $(this).offset().top){
                    // 根据鼠标滚轮向下或者向上来定位
                    $('a#' + $(this).attr('id')).removeClass('active')
                    console.log($('a#' + $(this).attr('id')).parent().next().length)
                    if ($('a#' + $(this).attr('id')).parent().next().length!=0){
                        $('a#' + $(this).attr('id')).parent().next().children('a').addClass('active')
                    }else{
                        if ($('a#' + $(this).attr('id')).parent().parent().parent().next().length!=0){
                            $('a#' + $(this).attr('id')).parent().parent().siblings('a').removeClass('active')
                            $('a#' + $(this).attr('id')).parent().parent().parent().next().children('a').addClass('active')
                            $('a#' + $(this).attr('id')).parent().parent().parent().next().children('ul').find('li:first-child').children('a').addClass('active')
                        }
                    }
                }
            }
            if (e.deltaY < 0) {
                if (scrolltop < $(this).offset().top + 140 && e.deltaY < 0 && state) {
                    state = false
                    $('a#' + $(this).attr('id')).parent().parent().children().children().removeClass('active')
                    if (!$('a#' + $(this).attr('id')).parent().parent().prev().hasClass('active')) {
                        $('a#' + $(this).attr('id')).parent().parent().parent().parent().find('a[id^="title"]').removeClass('active')
                        $('a#' + $(this).attr('id')).parent().parent().prev().addClass('active')
                    }
                    $('a#' + $(this).attr('id')).parent().children('a').removeClass('active')
                    $('a#' + $(this).attr('id')).addClass('active')
                }    
            }
        })
    }
    window.onload = function(){
        // $('body,html').animate({scrollTop:0},50)
        // 刷新页面之后定义标签的具体位置
    }
})()