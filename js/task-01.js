const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);

    const categoryItem = category.querySelectorAll('li');
    console.log(`Elements: ${categoryItem.length}`);
});

