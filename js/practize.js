// 1 Задача

// const container = document.getElementById('container');

// const ulList = document.createElement('ul');

// const formContainer = document.createElement('div');

// const inputItem = document.createElement('input');
// inputItem.style.display = 'block';
// inputItem.style.marginBottom = '10px';


// const addBtn = document.createElement('button');
// addBtn.textContent = 'Добавить';
// addBtn.style.marginRight = '35px';

// const removeBtn = document.createElement('button');
// removeBtn.textContent = 'Удалить';

// formContainer.append(inputItem, addBtn, removeBtn);

// container.append(formContainer, ulList);

// addBtn.addEventListener('click', e => {
//     if (inputItem.value.trim()) {
//         const liItem = document.createElement('li');
//         liItem.textContent = inputItem.value;
//         ulList.appendChild(liItem);

//         const liCount = ulList.children.length;
//         liItem.classList.add(liCount % 2 === 0 ? 'even' : 'odd');

//         inputItem.value = '';
//     }
// });

// removeBtn.addEventListener('click', e => {
//     if (ulList.hasChildNodes()) {
//         ulList.removeChild(ulList.lastElementChild);
//     }
// });

