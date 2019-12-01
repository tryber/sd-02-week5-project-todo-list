const lista = document.querySelector('.lista');
const input = document.querySelector('input[type=text]');
const adiciona = document.querySelector('.adicionar');

const select = {
  element: Element,
  gray() { this.element.classList.add('gray'); },
  white() { this.element.classList.add('white'); }
};

function addEventItemClick(elem) {
  elem.addEventListener('click', (e) => {
    select.element.style === undefined ? console.log() : select.white();
    select.element = e.target;
    select.gray();
  });
}

function addEventItemDoubleClick(elem) {
  elem.addEventListener('dblclick', (e) => {
    e.target.classList.toggle('line-through');
  });
}

function adicionar(text) {
  const item = document.createElement('p');
  item.innerText = text;
  item.classList.add('item');
  lista.appendChild(item);
  addEventItemClick(item);
  addEventItemDoubleClick(item);
}

function adicionaInput() {
  if (input.value.length !== 0) {
    adicionar(input.value);
    input.value = '';
  }
}

adiciona.addEventListener('click', () => {
  adicionaInput(input.value);
});

function verificaSalva() {
  const string = localStorage.getItem('salva');
  const array = string.split(',');
  array.forEach((item) => {
    adicionar(item);
  })
  adicionaInput('coisa');
}

verificaSalva();

function deleteItem() {
  select.element.remove();
  select.element = Element;
}

function deleteItems() {
  lista.querySelectorAll('p').forEach((item) => {
    lista.remove(item);
  })
}

function deleteCompletos() {
  lista.querySelectorAll('p').forEach((elem) => {
    elem.classList.contains('line-through') ?
      elem.remove() : console.log();
  })
}

function up() {
  const irmao = select.element.previousElementSibling;
  if (irmao !== null) {
    irmao.insertAdjacentHTML('beforebegin', select.element.outerHTML);
    select.element.remove();
    select.element = irmao.previousElementSibling;
  }
}

function down() {
  const irmao = select.element.nextElementSibling;
  if (irmao !== null) {
    irmao.insertAdjacentHTML('afterend', select.element.outerHTML);
    select.element.remove();
    select.element = irmao.nextElementSibling;
  }
}


function salva() {
  let string = '';
  lista.querySelectorAll('p').forEach(item => {
    string == '' ? string += `${item.innerText}` : string += `,${item.innerText}`;
  });
  localStorage.setItem('salva', string);
}


