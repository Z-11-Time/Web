const myvideo = document.getElementById("video");
const str = '新年快乐，幸福如意。笑容灿烂，健康平安。事业蒸蒸日上，家庭幸福美满。新年更胜往昔，如愿以偿。';
let i = 0;
const divTyping = document.getElementById('wish');
// 设置文字颜色
// divTyping.style.color = '#ffffff';
console.log(divTyping, 'divTyping');
function typing(){
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_';
        setTimeout(typing, 200);
    }
    else{
        divTyping.innerHTML = str;
    }
}
function play(){
    myvideo.play();
    document.getElementById("top").classList.add("tran");
    document.getElementById("bottom").classList.add("trans");
    setTimeout(typing, 2*1000);
}