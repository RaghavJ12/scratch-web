import React, { useState } from 'react';
import { drag } from '../utils/dragNDrop';
import getBlockColor from '../utils/getBlockColor';
import Icon from './Icon';
import { getTextIcon } from './../utils/stringFormatter';
import BlockWrapper from './BlockWrapper';
import PropTypes from 'prop-types';
import { NumericInput } from 'react-typed-inputs';

const SidebarItem = ({ title, data }) => {
    const [val, setVal] = useState([10,10,10,10,10,10]);
    return (
        <>
            <div className="font-semibold"> {title} </div>

            {data.map((_d, i) => {
                return (
                    <div
                        draggable
                        onDragStart={drag}
                        id={title + i}
                        key={title + i}
                        className={`${val[i]} flex flex-row flex-wrap bg-${getBlockColor(
                            title
                        )}-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded-lg w-full text-base justify-center`}
                    >
                        <BlockWrapper text={getTextIcon(_d, 0)} icon={_d?.icon ? "true" : "false"} />
                        {getTextIcon(_d, 1) && (
                            <Icon
                                name={getTextIcon(_d, 1)}
                                size={15}
                                className="text-green-600 mx-2"
                            />
                        )}
                        {_d.val ?
                        <NumericInput value={val[i]} onValueChange={(value) => {
                            let valCopy = [...val];
                            valCopy[i] = value;
                            setVal(valCopy);
                            console.log("val", val);
                        }} className="w-6 rounded text-black mx-3" />
                        : null}
                        <BlockWrapper text={getTextIcon(_d, 2)} />
                    </div>
                )
            })}
        </>
    );
};

SidebarItem.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

export default SidebarItem;
