import React from 'react';
import blocks from '../constants/blocks';
import SidebarItem from './SidebarItem';
import { allowDrop, deleteDiv } from '../utils/dragNDrop';

export default function Sidebar() {
    return (
        <div
            onDrop={deleteDiv}
            onDragOver={allowDrop}
            className="w-68 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 m-2"
        >
            <div className="font-bold mb-16">Commands </div>
            {Object.keys(blocks).map((blockName) => (
                <SidebarItem
                    key={blockName}
                    title={blockName}
                    data={blocks[blockName]}
                />
            ))}
        </div>
    );
}
