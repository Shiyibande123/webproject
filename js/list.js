var jiantou = document.getElementById('jiantou');
var jtchildren = document.getElementById('jiantou').children;
var choose = document.getElementById('choose');
// var lists=document.getElementById('list').children;//所有Li 数组
var chone = document.getElementById('chone');
var chtwo = document.getElementById('chtwo');
var chthree = document.getElementById('chthree');
var chfour = document.getElementById('chfour');
var chfive = document.getElementById('chfive');
var chsix = document.getElementById('chsix');
//  console.log(lists)
// lists[0]  2个span
// lists[1] 6个span
// list[2]  8个span
// list[3]
// list[4]
// list[5]

// jiantou.onclick = function () {
//     // this.style.display = 'none';
//     choose.style.display = 'block';
//     jtchildren.style.transform='rotate(180deg)'
//     jtchildren.style.transform='rotate(180deg)'
  
// }

// for(var a=0;a<chone.length;a++){
// console.log(lists[a])//一个Li
// console.log(lists.length)//有多少个li
// console.log(lists[a].children)//一个li里面的所有元素有谁
// console.log(lists[a].children.length)//一个Li里面有多少个元素

//     lists[a].children.onclick=function(){
//         console.log(a)
// this.setAttribute('class','current')

//     }
// console.log(lists[a].children)

// 实现点击变色：
for (var i = 1; i < chtwo.children.length; i++) {
    chtwo.children[i].onclick = function () {
        for (var b = 0; b < chtwo.children.length; b++) {
            chtwo.children[b].removeAttribute('class', 'current')
        }
        this.setAttribute('class', 'current')

    }
}

for (var i = 1; i < chthree.children.length; i++) {
    chthree.children[i].onclick = function () {
        for (var b = 0; b < chthree.children.length; b++) {
            chthree.children[b].removeAttribute('class', 'current')
        }
        this.setAttribute('class', 'current')

    }
}

for (var i = 1; i < chfour.children.length; i++) {
    chfour.children[i].onclick = function () {
        for (var b = 0; b < chfour.children.length; b++) {
            chfour.children[b].removeAttribute('class', 'current')
        }
        this.setAttribute('class', 'current')

    }
}

for (var i = 1; i < chfive.children.length; i++) {
    chfive.children[i].onclick = function () {
        for (var b = 0; b < chfive.children.length; b++) {
            chfive.children[b].removeAttribute('class', 'current')
        }
        this.setAttribute('class', 'current')

    }
}


for (var i = 1; i < chsix.children.length; i++) {
    chsix.children[i].onclick = function () {
        for (var b = 0; b < chsix.children.length; b++) {
            chsix.children[b].removeAttribute('class', 'current')
        }
        this.setAttribute('class', 'current')

    }
}

// 选项卡：
var menu = document.getElementById('menu');
var list = document.getElementById('menu').children;
var listcurrent = document.getElementById('list').children;
// console.log(listcurrent)

for (var a = 0; a < list.length; a++) {
    list[a].setAttribute('index', a);
    list[a].onclick = function () {
        var num = this.getAttribute('index');
        // console.log(num)
        for (var i = 0; i < list.length; i++) {
            list[i].removeAttribute('class');
            listcurrent[i].removeAttribute('class');
        }
        this.setAttribute('class', 'current');
        listcurrent[num].setAttribute('class', 'current');
    }
}
