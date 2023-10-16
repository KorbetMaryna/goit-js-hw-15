const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

function createMarkup(arr) {
  const markup = arr.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  })

  ingredientsList.append(...markup);
}

createMarkup(ingredients);
