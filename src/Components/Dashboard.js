import React, { useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
    const [images, setImages]= useState([]);

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages([...images, imageUrl]);
        }
    };


    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="dashboard-container">
            <div className="left-space"></div>

            <div className="right-content">
                <div className="tabs-section">
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
                    <div className="content-container">
                      {activeTab=== 'about' && (
                       <div className="content-text">
                          Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.
                          Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.                      </div>
                    )}
                    {activeTab=== 'experiences' && (
                       <div className="content-text">
                           Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.
                       </div>
                    )}
                    {activeTab=== 'recommended' && (
                       <div className="content-text">
                            Hello! I'm Dhananjay, I am from Faridabad Haryana, I completed my M.C.A from D.A.V Institute of Management.
                       </div>
                    )}
                     </div>

                </div>

                <div className="gallery-container">
                    <div className="gallery-header">
                        <h2>Gallery</h2>
                       <input
                          type="file"
                          id="fileInput"
                          accept="image/*"
                          style={{display:"none"}}
                          onChange={handleAddImage}
                        />
                       <div className="controls">
                            <label htmlFor="fileInput" className="add-image-button">+ Add Images</label>
                            <button className="arrow-button">&larr;</button>
                            <button className="arrow-button">&rarr;</button>
                       </div>
                    </div>

                    <div className="image-grid">
                       {images.map((src, index) => (
                      <div className="image-item" key={index}>
                          <img src={src} alt={`gallery-${index}`} />
                      </div>
                      ))}
                       {/* <div className="image-item"></div>
                       <div className="image-item"></div>
                       <div className="image-item"></div>
                       <div className="image-item"></div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Dashboard