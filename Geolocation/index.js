//google经常被墙 最好还是使用国内的百度地图等Api进行代替
;(function() {
    if (!navigator.geolocation){
        alert('您的浏览器不支持地理位置定位');
        return false;
    }
    //获取基本的位置信息
    //arguments (successfn,errorfn,optionsobj)
    navigator.geolocation.getCurrentPosition(function(ops){
        //获取postion中的坐标值
        var crd = ops.coords;
        //表示获取到位置的时间
        var timestamp = ops.timestamp;
        console.log("您的当前位置是：");
        console.log("纬度："+crd.latitude);
        console.log("经度："+crd.longitude);
        console.log("距离海平面"+crd.altitude+"米之内");
        console.log("误差范围"+crd.accuracy+"米之内");
        console.log("偏离北方"+crd.heading+"度");
        console.log("当前速度"+crd.speed+"度");
        console.log(ops);
        console.log(crd);  
    },function(err){
        switch (err.message) {
            case "Timeout expired":
                alert("查询超时!");
                break;
        
            case "User denied Geolocation":
                alert('用户拒绝')
                break;
            default:
                alert(err.message);
                break;
        }
        console.warn(err.message);
        console.log(err);
    },{
        //是否高度精准
        enableHighAccuracy:true,
        //能够等待方法回传位置的最长时间
        timeout:50000,
        //接受暂存位置的最长时间
        maximumAge:0
    })
})()