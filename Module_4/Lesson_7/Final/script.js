// *********************************Стрілочна функція (Arrow function)****************************************\\

// JSDoc - comment коротка відомість про функцію яка допомагає іншому розробнику швидше зрозуміти що робить, приймає та повертає функція.
// Для створення JSDoc - comment на рядку перед створеною функціює натискаємо /**
// Далі описуємо нашу функцію.


// function declaration

/**
 * Buy product, log message with purchase info
 * @param {String} productName
 * @param {Number} productQty
 * @param {Number} price
 */
// function buyProduct(productName, productQty, price) {
//     console.log(`You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${productQty * price}`);
// }

// buyProduct('apple', 10, 35)




// arrow function

/**
 * Buy product, log message with purchase info
 * @param {String} productName
 * @param {Number} productQty
 * @param {Number} price
 */
// const buyProduct = (productName, productQty, price) => {
//     console.log(`You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${productQty * price}`);
// }

// buyProduct('apple', 10, 35)




// ***********Неявне повернення******** \\

// Явне повернення
/**
 * Get product total price
 * @param {Number} qty - quantity items
 * @param {Number} price - price per item
 * @returns {Number} - total price
 */
// const getTotalPrice = (qty, price) => {
//     return qty * price
// }

// getTotalPrice(3, 150)



// Неявне повернення
/**
 * Get product total price
 * @param {Number} qty - quantity items
 * @param {Number} price - price per item
 * @returns {Number} - total price
 */

// const getProductPrice = (qty, price) => qty * price;

// getTotalPrice(3, 150)





// *****Можливість не огортати параметри в круглі дужки якщо параметр один*****\\

// Один параметр з дужками
/**
 * Check user strong password 😂
 * @param {String} password
 * @returns {Boolean}
 */
// const checkPassword = (password) => password === 'qwerty111';

// console.log(checkPassword('qwerty111'));



// Один параметр без дужок
/**
 * Check user strong password 😂
 * @param {String} password
 * @returns {Boolean}
 */
// const checkPassword = password => password === 'qwerty111';

// console.log(checkPassword('qwerty111'));



// ***********Відсутність псевдомасиву arguments******** \\


// function declaration

/**
 * Log items
 */
// function getProductList() {
//     console.log(arguments);
//     for (const product of arguments) {
//         console.log(product);
//     }
// }

// getProductList('Apple', 'Banana', 'Orange', 'Mango')
// getProductList('Apple', 'Banana', 'Orange', 'Mango', 'Watermelon')



// arrow function

// const getProductList = (...args) => {
//     // console.log(arguments);
//     for (const product of args) {
//         console.log(product);
//     }
// }

// getProductList('Apple', 'Banana', 'Orange', 'Mango')
// getProductList('Apple', 'Banana', 'Orange', 'Mango', 'Watermelon')








// **************************************Callback function*********************************************\\

// *******Callback функція у вигляді посилання на функції*****\\
// function logResult(a, b, callback) {
//     console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, add)
// logResult(4, 5, sum)


// function add(a, b) {
//     return a + b
// }

// function sum(a, b) {
//     return a * b;
// }


// ******************Інлайнова Callback функція******************\\
// function logResult(a, b, callback) {
//     console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, (a, b) => a + b)
// logResult(4, 5, (a, b) => a * b)





// const products = ['Apple', 'Banana', 'Orange', 'Mango', 'Watermelon'];


// Цикл for
// for (let i = 0; i < products.length; i += 1) {
//     const product = products[i];

//     console.log(`${i + 1} - ${product}`);
// }


// forEach
// products.forEach((product, idx) => {
//     console.log(`${idx + 1} - ${product}`);
// })














// ******************************************* Практика **************************************************\\


// Task - 1
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product)
// }


// // function logProduct(product) {
// //     console.log(`Product`, product);
// // }


// // function logTotalPrice({ price, quantity }) {
// //     console.log(`Product total price ${price * quantity}`);

// // }


// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);




// Task - 2
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.

// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції

// function each(arr, action) {
//     const items = [];

//     arr.forEach(elem => {
//         const result = action(elem);
//         items.push(result);
//     })

//     // arr.forEach(elem => items.push(action(elem)))

//     return items
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));



// Task-3
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.


// const products = [
//     {
//         id: 1,
//         name: "Телефон",
//         price: 10000,
//         description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//     },
//     {
//         id: 2,
//         name: "Ноутбук",
//         price: 25000,
//         description: "Легкий та потужний ноутбук для роботи та розваг.",
//     },
//     {
//         id: 3,
//         name: "Планшет",
//         price: 8000,
//         description: "Компактний планшет для перегляду контенту.",
//     },
// ];

// function getProductDetails(id, success, error) {
//     for (const product of products) {
//         if (product.id === id) {
//             return success(product);
//         }
//     }

//     error(id);
// }

// getProductDetails(3, handleSuccess, handleError)
// getProductDetails(44, handleSuccess, handleError)

// function handleSuccess(message) {
//     console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//     console.log(`❌ Error! Product with ${productId} id not found`);
// }




// Task-4
// Напишіть функцію calculateAveragePrice, яка приймає на вхід масив об'єктів, що представляють товари, та колбеки onSuccess та onError.
// Функція повинна обчислювати середню ціну товарів у масиві та викликати колбек onSuccess, передаючи йому отриману середню ціну як аргумент.
// Якщо масив товарів порожній, функція повинна викликати колбек onError, передаючи йому рядок "No products found".
// Для форматування середньої ціни використовується метод toFixed(2), щоб обмежити число до двох десяткових знаків.

// const products = [
//     {name: 'Apple', price: 0.99 },
//     {name: 'Banana', price: 0.49 },
//     {name: 'Orange', price: 0.79 },
//     {name: 'Mango', price: 1.99 }
//   ];


// function calculateAveragePrice(products, onSuccess, onError) {
//     if (!products.length) {
//         onError('No products found');
//         return;
//     }

//     let total = 0;
//     products.forEach((product) => total += product.price);

//     const averagePrice = total / products.length;
//     onSuccess(averagePrice);
// }




// const onSuccess = (averagePrice) => console.log('Average price:', averagePrice.toFixed(2));

// const onError = (errorMessage) => console.log('Error:', errorMessage);


// calculateAveragePrice(products, onSuccess, onError);