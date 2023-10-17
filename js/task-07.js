const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener("input", (e) => {
    let value = e.target.value;
    text.style.fontSize = value + "px";
});


