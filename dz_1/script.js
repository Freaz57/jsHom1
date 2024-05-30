// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и
// вывести полученную коллекцию в консоль.

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// 5. Выведите содержимое тега title в консоль.

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// 8. Удалите тег h6 на странице.

const elementId = document.getElementById("super_link");
console.log(elementId)

const elementLink = document.querySelectorAll(".card-link");

elementLink.forEach(element => {
    element.textContent = 'ссылка';
})

const parentElem = document.querySelector(".card-body");

const findElem = parentElem.querySelectorAll('.card-link')
console.log(findElem)

const dataAttr = document.querySelector('[data-number="50"]')
console.log(dataAttr)

console.log(document.title)

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode)

const cardContainer = document.querySelector('.card');

const p = document.createElement('p');
p.textContent = "Привет";
cardContainer.before(p);

const h6 = document.querySelector('h6');
h6.remove()

