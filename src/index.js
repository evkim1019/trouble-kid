const faker = require('faker');

console.log(faker.helpers.userCard())


const listUl = document.querySelector('#faker-list');
listUl.innerHTML = new Array(50).fill('-').map( _ => faker.helpers.userCard()).map(helper => `<li>${helper.name}</li><br>`).join('');
