var code = document.getElementById('code');
var see = document.getElementById('see');

// 鼠标悬浮显示二维码：
see.onmouseenter = function () {
    code.style.display = 'inline-block'
}
see.onmouseleave = function () {
    code.style.display = 'none'
}

// 地图：
var btn = document.getElementById('btn');
var map = document.getElementById('map');
// 点击自己，内容在两种情况之间变化，用判断来做。
btn.onclick = function () {
    if (btn.innerHTML == '收起地图') {
        btn.innerHTML = '查看地图';
        map.style.display = 'none';
    } else {
        btn.innerHTML = '收起地图'
        map.style.display = 'block'
    }
}