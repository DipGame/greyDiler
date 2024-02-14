// const price = document.querySelector('.car-list');
// const logoList = price.querySelectorAll('.car-menu__card');
// const logoListItems = price.querySelectorAll('.car-list__item-wrapper');

// let num = 0;
// logoList.forEach(element => {
//     element.id = num;
//     num++;
//     element.addEventListener('click', () => {
//         if (element.classList.contains('car-menu__card_active')) {
//             clearAllItems();
//             clearCheckLogo();
//         } else {
//             clearCheckLogo();
//             clearItems(element.id);
//             element.classList.add('car-menu__card_active');
//         }
//     })
// });

// function clearCheckLogo() {
//     logoList.forEach(element => {
//         if (element.classList.contains('car-menu__card_active')) {
//             element.classList.remove('car-menu__card_active')
//         }
//     });
// }

// function clearAllItems() {
//     logoListItems.forEach(element => {
//         if (element.classList.contains('item_invise')) {
//             element.classList.remove('item_invise');
//         }
//     });
// }

// function clearItems(id) {
//     logoListItems.forEach(element => {
//         if (element.id == id) {
//             if (element.classList.contains('item_invise')) {
//                 element.classList.remove('item_invise');
//             }
//         } else {
//             if (!element.classList.contains('item_invise')) {
//                 element.classList.add('item_invise');
//             }
//         }
//     });
// }