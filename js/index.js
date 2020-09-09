sentence =
    'An old woman lives next door. Every morning she gets up at six and goes out for a long walk. In the afternoon she works in her garden, and in the evening she often goes to the movies. One day I asked her about her life. “I am a very happy person,” she told me “and do you know my secret? I have never been married!”';
sentences = sentenceToArray(sentence);
function sentenceToArray(sentence) {
    const re = /\w+|\.+|[^\s\w]+/g;
    const split = sentence.match(re);
    return split;
}

const manySpans = document.querySelector('.manySpans');
let wordCount = 0;
let countArray = [];
sentences.forEach(function (element) {
    const mySpan = document.createElement('span');
    elementLower = element.toLowerCase();
    mySpan.setAttribute('id', elementLower);
    if (
        element != '!' &&
        element != '?' &&
        element != "'" &&
        element != '"' &&
        element != '.' &&
        element != '“' &&
        element != '’' &&
        element != ',”' &&
        element != ',' &&
        element != '!”'
    ) {
        mySpan.setAttribute('class', 'toBeReplaced');
        countArray.push(element);
        console.log(countArray);

        wordCount++;
    }

    mySpan.innerHTML = element + ' ';

    manySpans.appendChild(mySpan);
});

const inputElement = document.querySelector('.inputClass');
const inputButton = document.querySelector('.inputButton');

inputElement.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        mySubmitFunction();
        inputElement.value = '';
    }
});

const mySubmitFunction = () => {
    let guess = inputElement.value.trim();

    if (
        sentences.includes(guess) ||
        sentence.includes(guess.charAt(0).toUpperCase() + guess.slice(1))
    ) {
        const removeItList = document.querySelectorAll('#' + guess);
        removeItList.forEach(element =>
            element.setAttribute('class', 'toBeRevealed')
        );

        wordCount--;
        let i = 0;
        while (countArray[i] < countArray.length) {
            if (countArray[i] === guess) {
                countArray.splice(i, 1);
            } else {
                ++i;
                console.log(countArray);
                console.log(countArray.length);
            }

            return countArray;
        }

        if (countArray.length == 0) {
            const wellDone = document.createElement('div');
            wellDone.setAttribute('class', 'wellDone');
            wellDone.textContent = 'Well done!';
            manySpans.appendChild(wellDone);
            inputElement.disabled = 'true';
            inputButton.disabled = 'true';
        }
    } else {
        console.log('try again');
    }
};
