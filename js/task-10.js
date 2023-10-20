const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesDiv: document.getElementById("boxes"),
};

refs.createBtn.addEventListener('click', () => {
  const amount = Number(refs.input.value);
  createBoxes(amount);
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
    const basicSize = 30;

    for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    let box = document.createElement("div");
    box.textContent = `${i + 1}`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesDiv.appendChild(box);
  }
};

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
  refs.input.value = "";
}
