const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const refList = document.querySelector('#ingredients');

const items = [];

ingredients.forEach((ingredient) => {
  const CreateLiEl = document.createElement("li");
  CreateLiEl.textContent = ingredient;
  CreateLiEl.classList.add("item");
  items.push(CreateLiEl);
});

refList.append(...items);

