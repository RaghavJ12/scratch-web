import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drag } from '../utils/dragNDrop';
import { switchTab, appendTab } from './../redux/action';
import Icon from './Icon';

function TabArea() {
    const tabs = useSelector((state) => state.tabs);
    const currentTab = useSelector((state) => state.currentTab);
    const dispatch = useDispatch();

    const getName = (id) => {
        const integers = id.match(/(\d+)/);
        return 'Sprite ' + integers[0];
    };

    const toggleTab = (e) => {
        // setCurrentTab(id);
        dispatch(switchTab(e.target.dataset.tab));
    };

    const addTabs = () => {
        if (tabs.length > 4) {
            alert('You can only have 5 tabs');
            return;
        }
        dispatch(appendTab());
    };
    return (
        <>
            <div className="relative">
                <div
                    onClick={toggleTab}
                    onDragStart={drag}
                    className="w-5/6 flex flex-no-wrap overflow-x-auto items-start scrolling-touch m-1"
                >
                    {tabs.map((tab, i) => {
                        return (
                            <button
                                draggable
                                id={'sprite-' + tab}
                                key={tab + 'btn'}
                                className={`${tab === currentTab
                                    ? 'bg-pink-600'
                                    : 'bg-pink-400 hover:bg-pink-500'
                                    }  text-white font-semibold py-2 px-4 rounded inline-flex items-center`}
                                data-tab={tab}
                            >
                                {getName(tab)}
                            </button>
                        )
                    })}
                </div>

                <div className="h-16 border-grey-200 border-l absolute bottom-0 right-2 bg-white">
                    <button
                        onClick={addTabs}
                        className="p-2 ml-2 mt-6 rounded-full hover:bg-blue-50"
                    >
                        <Icon name="plus" size={20} className="text-green-500" />
                    </button>
                </div>
            </div>
            <p className="text-center bg-blue-100 py-2">
                DropBox for {getName(currentTab)}
            </p>
        </>
    );
}

export default TabArea;
