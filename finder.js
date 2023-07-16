const inputEl = document.querySelector('#input-text');
const spanEl = document.querySelector('#span-text');


function findUniqueSymbol(str) {
    const words = str.split(' ');
    const uniqueSmbls = [];
    
    for (const word of words) {
        const charFreq = {};
        let uniqueChar = '';

        for (const char of word) {
            charFreq[char] = (charFreq[char] || 0) + 1;
        }

        for (const char of word) {
            if (charFreq[char] === 1) {
                uniqueChar = char;
                uniqueSmbls.push(uniqueChar);
                break;
            }
        }
    }

    for (const char of uniqueSmbls) {
        if (uniqueSmbls.filter(c => c === char).length === 1) {
            return char;
        }
    }

    return null;
}


inputEl.addEventListener('input', function (e) {
    if (e.currentTarget.value === '') {
        spanEl.textContent = 0;
    }
    const result = findUniqueSymbol(e.currentTarget.value)
    spanEl.textContent = result;
})