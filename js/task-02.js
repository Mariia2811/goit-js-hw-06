const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const refList = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const createElement = document.createElement('li');
  createElement.textContent = ingredient;
  createElement.classList.add('item');
  refList.append(createElement)
})

