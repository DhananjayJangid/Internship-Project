import React from "react";
import './Styles.css';


const Content = ({activeTab}) => {
    return (

        <div className="content-container">
            {activeTab=== 'About Me' && (
                <div className="content-text">
                  Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.
                  
                  
                </div>
            )}

            {activeTab=== 'Experiences' && (
                <div className="content-text">
                  
                </div>
            )}

            {activeTab=== 'Recommended' && (
                <div className="content-text">
                  Recommended
                </div>
            )}

        </div>
    );
    
};

export default Content