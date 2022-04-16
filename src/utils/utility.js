export function* makeRangeIterator(times) {
    let iterationCount = 0;
    for (let i = 0; i < times; i++) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}


export const sleep = (time) =>
    new Promise((resolve) => setTimeout(resolve, time));

export const sleepFor = async (time) => {
    await sleep(time * 1000);
    return;
};

export const moveCat = async (cat, val) => {
    // cat.style.transform = ``;
    cat.style.transform += `translate(${10 * val}px,0%)`;
};

export const jumpCat = async (cat) => {
    cat.style.transform += `translateY(-100%)`;
    // console.log(new DOMMatrixReadOnly(cat.style.transform))

    setTimeout(() => {
        cat.style.transform += `translateY(100%)`;
    }, 300);
    await sleep(1000);
};

export const turnCat = (cat, degree, dir) => {
    dir = dir === 'CW' ? 1 : -1;
    cat.style.transform += `rotate(${dir * degree}deg)`;
};

export const isGeneratorFunc = (func) => {
    if (!func) return false;
    return func.constructor.name === makeRangeIterator.constructor.name;
};
