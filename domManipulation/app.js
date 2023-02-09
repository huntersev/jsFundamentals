document.getElementById('container');//1

document.querySelector('#container');//2

document.querySelectorAll('.second');//3

document.querySelector('ol .third');//4

const div = document.querySelector('#container');
div.innerText = 'hello';//5

const footer = document.querySelector('.footer');
footer.classList.add('main');//6

footer.classList.remove('main');//7

const li = document.createElement('li');//8

li.innerText = 'four';//9

const newLi = document.querySelector('ul');
newLi.appendChild(li);//10

const list = document.querySelectorAll('ol li');
for(let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = "green";
}//11

footer.remove();//12
