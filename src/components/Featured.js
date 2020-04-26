import React from 'react'
import store from '../img/bgstore.png'

export default function Featured() {
   
    return (
        <div className="featured">
            <div className="featured-image-wrap">
                <a href="https://to-store.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img className="featured-image" src={store} alt="featured-img" />
                </a>
            </div>
            <div className="featured-desciption">                    
                <h4 className="featured-title">E-STORE</h4>
                <ul className="featured-list">
                    <li>made with React ver 16.8</li>
                    <li>fully responsive, error 404 handling </li>
                    <li>hooks, API Context, browser routing</li>
                    <li>modals, CSS grids and animations</li>
                    <li>Paypal payment and cart management</li>
                </ul>
            </div>
        </div>  
    )
}
