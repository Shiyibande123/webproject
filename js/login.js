var now=document.getElementById('now');
var display=document.getElementById('display');
var message=document.getElementById('message');
var password=document.getElementById('password');
// 当点击短信登录：
message.onclick=function(){
    display.style.display='none';
    password.removeAttribute('class','current2');
    now.style.display='block';
    message.setAttribute('class','current2')
}
// 当点击密码登录：
password.onclick=function(){
    now.style.display='none';
    message.removeAttribute('class','current2');
    display.style.display='block';
    password.setAttribute('class','current2')
}