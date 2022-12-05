// let basketclear = document.querySelector('.header__links-basket');
// let basketcontt = document.querySelector('.basketcont')

// const getBasket1 = () => {
//     basketList.innerHTML = '';
//     basketData.forEach((item) => {
//         basketList.innerHTML += `
//             <div class="basket__card">
//                 <img src="${item.images}" alt="${item.title}" class="basket__card-img">
//                 <h3 class="basket__card__name">${item.title}</h3>
//                 <span class="basket__card__sum">${item.price} руб.</span>
//                 <img data-id="${item.id}" src="./src/icons/X.svg" alt="" class="basket__card__X removeCart removeCartInBasket">
//               </div>
              
//               <div class="basketNone__main-none">
//                 <img src="../images/basketNone/smile1.png" alt="Pain smile img" class="basketNone__main-none-img">
//                 <div class="basketNone__main-none-text">
//                     <h2 class="basketNone__main-none-title">У вас нет заказов</h2>
//                     <p class="basketNone__main-none-desc">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
//                     <a href="../../index.html" class="basketNone__main-none-link"><span class="basketNone__main-none-link-icon"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </span>Вернуться назад</a></div>
//             </div>    
// `;
//     });
// }

// if (basketData.length === 0) {
//   basket__card;
// }
// else {
//   main__assort-mainContent-favorites;
// }

// const debounce1 = (fn, delay) => {
//   let timeout;
//   return(...args)=> {
//     clearTimeout(timeout);
//     let fnCall = () => {
//       fn(...args);
//     };
//     timeout = setTimeout(fnCall,delay );
//   }
// }

// modalWindow_inner_button.addEventListener('click', (e) => {
//   modulebasket.classList.add('show')
// })

// modulebasket.addEventListener('click', (e) => {
//   if (e.target.classList.contains('.modulebasket')) {
//       modulebasket.classList.remove('show');
//   }
// })







// basketclear.addEventListener('click', (e) => {
//   if (e.target.classList.contains('.basketcont')) {
//     basketcontt.classList.add('show');
//   }
// });



let basketPage = document.querySelector('.basket__main-mainContent-assort-empty')
let shoesList = document.querySelector('.main__assort-mainContent')