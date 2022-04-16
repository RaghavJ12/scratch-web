import React, { useState } from 'react';
import CatSprite from './CatSprite';
import { useSelector } from 'react-redux';
import mergeSprite from '../utils/mergeSprite';
import commandParser from '../utils/commandParser';
import toast from 'react-hot-toast';
import Icon from './Icon';

export default function PreviewArea() {
    const bgCols=["red","blue","green","yellow","purple","pink"];

    const commands = useSelector((state) => state.commands);

    const [bgcol,setBgcol]= useState("red")

    const reset = () => {
        const cat = document.querySelector('#movingCat');
        cat.style = '';
        toast.success('Reset', { position: 'bottom-left' });
    };
    const execute = async (e) => {
        if (e.target.dataset.run) await commandParser(mergeSprite(commands));
        if (e.target.dataset.reset) reset();
    };
    function handleChange(e) {
        setBgcol(e.target.value);
    }

    return (
        <div
            onClick={execute}
            className={`flex-none w-full h-full overflow-y-auto p-2 bg-${bgcol}-200`}
        >
            <div className="flex min-h-[50%]">
                <button
                    className="fixed right-20 top-15 bg-blue-100 hover:bg-blue-50 text-gray-50 rounded-full h-12 w-12"
                    data-run
                >
                    <Icon name="flag" size={20} className="text-green-500 mx-3.5" />
                </button>
                <button
                    className="fixed right-5 top-15 bg-blue-100 hover:bg-blue-50 text-gray-50 rounded-full h-12 w-12"
                    data-reset
                >
                    <Icon name="redo-alt" size={20} className="text-red-500 mx-3.5" />
                </button>
                <select value={bgcol} onChange={handleChange} className="w-20 p-1 rounded mt-2">
                    {bgCols.map((col,i) => (
                    <option key={i}>{col}</option>
                    ))}
                </select>
            </div>
            <CatSprite id="movingCat" className="transition-all mt-60" />
        </div>
    );
}
