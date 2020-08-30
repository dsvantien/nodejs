let myButton = document.getElementById('count');

var clickCount = 0;
(onClicks) => {
    let clickCount = clickCount + 1;
    return clickCount;
}
myButton.onclick = () => {
    onClicks();
    console.log(clickCount);
}