import React, { useEffect, useState } from 'react';
import { NumericInput } from 'react-typed-inputs';

export const InputNum = () => {
    const [val, setVal] = useState(10);
    console.log(val);
    return [
        <NumericInput value={val} onValueChange={setVal} className="w-12 form-control rounded text-black mx-3" />,
        val
    ];
}