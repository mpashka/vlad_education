window.addEventListener("load", function(event) {
    __init()
});

let divList, addInput
function __init(){
    divList = document.querySelector('.listBlock');
    addInput = document.querySelector('#addInput');
    const addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', addList)
}


function addList() {
    if (addInput.value === '') {
        alert('Enter the name, please.');
    }
    else {
        const ul = divList.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = addInput.value;
        addInput.value = '';
        ul.appendChild(li);
    }
}

divList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.className === 'btn-remove') {
            ul.removeChild(li);
        }
    }
});