/* Theory

Массивы - это коллекция каких либо элементов. Переменная в которой храняться другие переменные

const array = [1, 2, 4, 5, 20, 1000]
const arrayStrings = ['Ruslan', 'Anna', 'Kirill', 'Estella', null, 12]
const array = new Array (1, 2, 3 ,4)


console.log(array.length)

console.log(array[0])
console.log(array[array.length - 1]) // Так как длинна массива начинается с нуля мы получаем undifined, Чтобы получить последний элемент массива нужно вычесть 1

array[0] = 'Hello World'
console.log(array[0])
array[array.length] = 'becon'
*/

// #title, #creat, #list

const inputElement = document.getElementById('title')
const creatBtn = document.getElementById('creat')
const listElement = document.getElementById('list')


// console.log(inputElement.value);

// const notes = ['Вывести Саню из депры', 'Дать п@зд$ депрессии', 'Продать гараж']

// function render () {

//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// creatBtn.onclick = function () {
//     if(inputElement.value.length === 0) {
//         return
//     }
//    listElement.insertAdjacentHTML(
//     'beforeend',
//      getNoteTemplate(inputElement.value)
//    )
//    inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return`
//     <li>
//         <div class="block-name mt-2">
//         <span class="text-name">${title}</span>
//         <div class="block-btn">
//             <div class="btn-9"><i class="fa fa-check" aria-hidden="true"></i></div>
//             <div class="btn-10"><i class="fas fa-trash-alt"></i></div>
//         </div>
//         </div>
//     </li>
//    `
// }

/**
 * Object Theory
 
const person = {
    firstName: 'Ruslan',
    lastName: 'Djumaniazov',
    year: 1989,
    hasMarried: true,
    languages: ['ru', 'en'],
    getFullName: function () {
        console.log(person.firstName + ' ' + person.lastName)
    }
}


console.log(person.year)
console.log(person['languages'])
const key = 'hasMarried'
console.log(person[key])
person.hasMarried = false
person.getFullName()

*/

const notes = [
{
    title: 'Вывести Саню из депры',
    completed: false,
},
{
    title: 'Дать п@зд$ депрессии',
    completed: false,
},
{
    title: 'Продать гараж',
    completed: true,
},

 ]

 function render () {

    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }
    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}
render()

creatBtn.onclick = function () {
    if(inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
   listElement.insertAdjacentHTML(
    'beforeend', getNoteTemplate(newNote))
   inputElement.value = ''
}

function getNoteTemplate(note) {

    return`
    <li>
        <div class="block-name mt-2">
        <span class="${note.completed ? 'text-decoration-line-through' : ''} text-name">${note.title}</span>
        <div class="block-btn">
            <div class="btn-${note.completed ? 'red' : 'green'}"><i class="fa fa-check" aria-hidden="true"></i></div>
            <div class="btn-red"><i class="fas fa-trash-alt"></i></div>
        </div>
        </div>
    </li>
   `
}