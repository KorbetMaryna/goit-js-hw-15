const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');


text.style.fontSize = fontSizeControl.value + "px";

fontSizeControl.addEventListener("input", (e) => {
    let value = e.target.value;
    text.style.fontSize = value + "px";
});


