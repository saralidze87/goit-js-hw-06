const catEl = document.querySelectorAll('li.item');
console.log('Number of categories:', catEl.length);

const catListEl = document.querySelectorAll('#categories>li');
catListEl.forEach((el,) => {
    
    console.log('Category:', catListEl, 'Elements:', catListEl.length);
   })

// function categoryNames() {
//     const catListEl = document.querySelectorAll('h2');
//     for(const name in catListEl) {
//         console.log(name);
//         console.log(catListEl[name]);
//     };
// }
//     // catListEl.forEach(catListEl => 
//     //     console.log('Category: catListEl.textContent'))};
//         categoryNames();