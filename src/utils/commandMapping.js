import toast from 'react-hot-toast';
import { makeRangeIterator, moveCat, sleepFor, turnCat,jumpCat } from './utility';

export const controlCommands = async (cmd, val) => {
    const splitCmd = cmd.split(' ');
    console.log(splitCmd);
    switch (splitCmd[0]) {
        case 'Wait':
            await sleepFor(val);
            return;

        case 'Repeat':
            if (splitCmd[2]) return makeRangeIterator(val);

        default:
            return;
    }
};

export const motionCommands = async (cmd,val) => {
    let splitCmd = cmd.split(' ');
    splitCmd = splitCmd.filter((cmdStr) => cmdStr.trim());
    console.log("cmd",val);

    const cat = document.querySelector('#movingCat');

    switch (splitCmd[0]) {
        case 'Move':
            moveCat(cat, val);
            return;

        case 'Jump':
            jumpCat(cat);
            return;

        case 'Turn':
            turnCat(cat, val, splitCmd[1]);
            return;

        default:
            return;
    }
};

export const looksCommands = async (cmd,val) => {
    let splitCmd = cmd.split(' ');

    splitCmd = splitCmd.filter((cmdStr) => cmdStr.trim());

    const toastConfig = {
        duration: parseInt(splitCmd[3]) * val * 100,
        position: 'bottom-left',
        icon: '🐱'
    };

    switch (splitCmd[0]) {
        case 'Say':
            toast(splitCmd[1], toastConfig);
            return;

        case 'Think':
            toast('Thinking... ' + splitCmd[1], toastConfig);
            return;

        default:
            return;
    }
};
