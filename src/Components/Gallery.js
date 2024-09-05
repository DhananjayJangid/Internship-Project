import React, { useState } from "react";
import './Styles.css';


const Gallery = () =>{
    const [images, setImages]= useState([]);

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages([...images, imageUrl]);
        }
    };
    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h3 className="gallery-title">Gallery</h3>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{display:"none"}}
                  onChange={handleAddImage}
                />
                <label htmlFor="fileInput" className="gallery-button">+ ADD IMAGE</label>
                <div className="gallery-arrows"> 
                    <button className="arrow-button">&larr;</button>
                    <button className="arrow-button" >&rarr;</button>
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

    );
};

export default Gallery;