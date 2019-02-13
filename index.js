const form = document.querySelector('form');
const name = document.querySelector('#name');
const weight = document.querySelector('#weight');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (name.value && weight.value) {

        const item = {
            name: name.value,
            weight: parseInt(weight.value)
        };

        db.collection('expenses').add(item).then(res => {
            error.textContent = '';
            name.value = '';
            weight.value = '';
        });

    } else {
        error.textContent = 'Please enter values before submitting';
    }

});