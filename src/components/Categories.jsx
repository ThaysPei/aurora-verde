import React from "react";
import "./Categories.css";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';

const categories = [
    { title: "Fresh fruit", img: img1},
    { title: "Fresh Vegetables", img: img2},
    { title: "Meat & Fish", img: img3 },
    { title: "Snacks", img: img4 },
    { title: "Beverages", img: img5},
    { title: "Beauty & Health", img: img6},
    { title: "Bread & Bakery", img: img7},
    { title: "Baking Needs", img: img8},
    { title: "Cooking", img: img9},
    { title: "Diabetic Food", img: img10},
    { title: "Dish Detergents", img: img11},
    { title: "Oil", img: img12}
     ];
    export default function Categories(){
        return (
            <section className="categories-container">
                <div className="categories-header">
                <h2>Popular Categories</h2>
                <a href="#" className="view-all">View All →</a>
                </div>


            
                <div className="categories-grid">
                    {categories.map((item, index) => (
                <div className="category-card" key={index}>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
                </div>
                ))}
                </div>
            </section>
        
        );
    }









