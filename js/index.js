sentence =
    'An old woman lives next door. Every morning she gets up at six and goes out for a long walk. In the afternoon she works in her garden, and in the evening she often goes to the movies. One day I asked her about her life. “I am a very happy person,” she told me “and do you know my secret? I have never been married!“';
sentences = sentenceToArray(sentence);
function sentenceToArray(sentence) {
    const re = /\w+|./g;
    const split = sentence.match(re);

    return split;
}

const manySpans = document.querySelector('.manySpans');

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
