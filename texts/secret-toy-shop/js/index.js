const button = document.querySelector('button');

sentence =
    'When we were children, my brother and I loved playing tricks on our friends. In my bedroom there was a big cupboard built into the wall. My brother and I used to get into the cupboard and lock the door with our friends outside. There was a mattress at the back of the cupboard and we used to hide things behind it. We told our friends that the cupboard was an elevator, and that at the bottom of the elevator, there was a secret toy shop. When we came out of the cupboard we always had toys with us. I think our friends really believed it, and we nearly did, too!';
sentences = sentenceToArray(sentence);
function sentenceToArray(sentence) {
    const re = /\w+|./g;
    const split = sentence.match(re);

    return split;
}

const manySpans = document.querySelector('.manySpans');
let itemsArray = [];
sentences.forEach(function (element) {
    if (
        element != ' ' &&
        element != ', ' &&
        element != '!' &&
        element != '?' &&
        element != "'" &&
        element != '"' &&
        element != '.' &&
        element != '“' &&
        element != '’' &&
        element != ',”' &&
        element != ',' &&
        element != ', ' &&
        element != '!”' &&
        element != ' “' &&
        element != ',” ' &&
        element != '”' &&
        element != '? '
    ) {
        let mySpan = document.createElement('span');
        mySpan.classList.add(element);

        let asterisks = element.replace(/[^,;.]/g, '_');
        mySpan.innerHTML = asterisks;
        manySpans.appendChild(mySpan);
        if (localStorage.getItem(element)) {
            mySpan.textContent = localStorage.getItem(element);
        }
    } else {
        let punctuationSpan = document.createElement('span');

        punctuationSpan.innerHTML = element;
        manySpans.appendChild(punctuationSpan);
    }
});

const inputElement = document.querySelector('.inputClass');
const inputButton = document.querySelector('.inputButton');

inputElement.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        mySubmitFunction();
        mySubmitFunctionUpper();
        inputElement.value = '';
        checkWin();
    }
});

const mySubmitFunction = () => {
    let guess = inputElement.value.trim();

    if (sentences.includes(guess)) {
        localStorage.setItem(guess, guess);
        const removeItList = document.querySelectorAll(`.${guess}`);
        removeItList.forEach(element => (element.textContent = `${guess} `));
    } else {
        errorShow();
    }
};

const mySubmitFunctionUpper = () => {
    let guess = inputElement.value.trim();
    let upperGuess = guess.charAt(0).toUpperCase() + guess.slice(1);

    if (sentences.includes(upperGuess)) {
        localStorage.setItem(upperGuess, upperGuess);
        const removeItUpperList = document.querySelectorAll(`.${upperGuess}`);
        removeItUpperList.forEach(
            element => (element.textContent = `${upperGuess} `)
        );
    }
};
function errorShow() {
    let guess = inputElement.value.trim();
    let upperGuess = guess.charAt(0).toUpperCase() + guess.slice(1);
    if (sentences.includes(guess) || sentences.includes(upperGuess)) {
        return;
    } else {
        inputElement.classList.add('error');
        setTimeout(() => inputElement.classList.remove('error'), 70);
    }
}

function checkWin() {
    if (document.documentElement.textContent.includes('_')) {
        return;
    } else {
        inputButton.innerHTML = 'CONGRATS!';
        inputButton.classList.add('wellDone');
    }
}

button.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});
