import React from 'react';
import './Styles.css';


const Tabs = ({activeTab, setActiveTab}) => {
    return (
        <div className='tabs-container'>
            {['About Me', 'Experiences', 'Recommended'].map(tab => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab=== tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                    {tab}

                </button>
            ))}
        </div>
    );
};



export default Tabs;