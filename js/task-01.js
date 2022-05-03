const catEl = document.getElementById('categories');
const catListEl = catEl.querySelectorAll('.item');
const catValue = catListEl.length;
console.log('Number of categories:', catValue);

for (let i = 0; i < catValue; i += 1) {
  const catTitle = catListEl[i].querySelector('h2');
  const catName = catTitle.textContent;
  console.log(`Category: ${catName}`);

  const catElRef = catListEl[i].querySelectorAll('li');
  const catValueRef = catElRef.length;
  console.log(`Elements: ${catValueRef}`);
}




