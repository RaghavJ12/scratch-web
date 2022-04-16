import React from 'react';
import PropTypes from 'prop-types';
import {InputNum} from './Input';

function BlockWrapper({ text }) {
    // let inp = InputNum()

    var JSXText = null;
    if (text.includes('$')) {
        const splittedText = text.split('$');
        const toHide = splittedText.pop();
        JSXText = (
            <>
                {splittedText.join('')}
                <span className="hidden">{toHide}</span>
            </>
        );
        return JSXText;
    }
    else if (text.includes('^')) {
        const splittedText = text.split('^val');
        JSXText = (
            <>
                {splittedText[0]}
                {/* {inp[0]} */}
                {splittedText[1]}
            </>
        );
        return JSXText;
    }
    return text;
}

BlockWrapper.propTypes = {
    text: PropTypes.string
};

export default BlockWrapper;
