sentence =
    'An old woman lives next door. Every morning she gets up at six and goes out for a long walk. In the afternoon she works in her garden, and in the evening she often goes to the movies. One day I asked her about her life. “I am a very happy person,” she told me “and do you know my secret? I have never been married!“';
sentences = sentenceToArray(sentence);
function sentenceToArray(sentence) {
    const re = /\w+|./g;
    const split = sentence.match(re);

    return split;
}
console.log('sentences ' + sentences);
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
    }
});

const mySubmitFunction = () => {
    let guess = inputElement.value.trim();

    if (sentences.includes(guess)) {
        console.log('hit');
        const removeItList = document.querySelectorAll(`.${guess}`);
        removeItList.forEach(element => (element.textContent = `${guess} `));

        removeItList.forEach(element => element.classList.add('toBeRevealed'));
        removeItList.forEach(element =>
            element.classList.remove('toBeReplaced')
        );

        removeItList.forEach(element => element.classList.add('toBeRevealed'));
        removeItList.forEach(element =>
            element.classList.remove('toBeReplaced')
        );
    }
};

const mySubmitFunctionUpper = () => {
    let guess = inputElement.value.trim();
    let upperGuess = guess.charAt(0).toUpperCase() + guess.slice(1);
    console.log(upperGuess);

    if (sentences.includes(upperGuess)) {
        console.log('hitUpper');

        const removeItUpperList = document.querySelectorAll(`.${upperGuess}`);
        removeItUpperList.forEach(
            element => (element.textContent = `${upperGuess} `)
        );

        removeItUpperList.forEach(element =>
            element.classList.add('toBeRevealed')
        );
        removeItUpperList.forEach(element =>
            element.classList.remove('toBeReplaced')
        );
    }
};
