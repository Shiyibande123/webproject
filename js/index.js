var box = document.getElementById('box');//dl
var lis = document.getElementById('box').children;//dd
for (var a = 1; a < lis.length; a++) {
    lis[a].onmouseenter = function () {//给每一个dd设置单击事件
        if (this.children.length != 0) {//this是某一个dd
            // this.lastChild.style.display='inline-block'
            this.lastElementChild.style.display = 'inline-block';
            this.lastElementChild.style.zIndex = 1;
        }
    }
    lis[a].onmouseleave = function () {
        if (this.children.length != 0) {
            this.lastElementChild.style.display = 'none';
        }

    }
}


var box1 = document.getElementById('box1');//dl
var liss = document.getElementById('box1').children;//dd
for (var a = 1; a < liss.length; a++) {
    liss[a].onmouseenter = function () {//给每一个dd设置单击事件
        if (this.children.length != 0) {//this是某一个dd
            // this.lastChild.style.display='inline-block'
            console.log('jinl')
            this.lastElementChild.style.display = 'inline-block';
            this.lastElementChild.style.zIndex = 1;
        }
    }
    liss[a].onmouseleave = function () {
        if (this.children.length != 0) {
            this.lastElementChild.style.display = 'none';
        }

    }
}





// 轮播图：
var pic = document.getElementById('pic');
var list = document.getElementById('bottom').children;
var timer;
var num = 0;
timer = setInterval(function () {
    num++;
    if (num == 3) { num = 0 };
    pic.style.transform = 'translateX(' + -num * 798 + 'px)';
    for (var a = 0; a < list.length; a++) {
        list[a].removeAttribute('class')
        // console.log("dfd")
    }
    list[num].setAttribute('class', 'current')
}, 2000);

for (var i = 0; i < list.length; i++) {
    list[i].setAttribute('index', i);
    list[i].onclick = function () {
        var ind = this.getAttribute('index');
        for (var a = 0; a < list.length; a++) {
            list[a].removeAttribute('class')
        }
        pic.style.transform = 'translateX(' + -ind * 798 + 'px)';
        this.setAttribute('class', 'current')
    }
}

//选项卡：
var list2 = document.getElementById('sec').children;//内容
var list3 = document.getElementById('left').children;//选项

for (var i = 0; i < list3.length; i++) {
    list3[i].setAttribute('index', i);
    list3[i].onclick = function () {
        var num = this.getAttribute('index');
        for (var a = 0; a < list3.length; a++) {
            list3[a].removeAttribute('class')
            list2[a].removeAttribute('class')
        }
        this.setAttribute('class', 'now');
        list2[num].setAttribute('class', 'now')

    }
}

// 阻止a标签的默认行为：闪烁的情况
var a = document.getElementsByTagName('a');
a.onclick = function (e) {
    e.preventDefault();
    return false;
}

// var contian=document.getElementById('contian');
// var tosign=document.getElementById('tosign');
// tosign.onclick=function(){
//     tosign.style.direction='block';
//     contian.style.display='block';
    
// }
