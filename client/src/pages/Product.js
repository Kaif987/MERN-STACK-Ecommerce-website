import { useState } from "react";
import star from "../Images/star.svg"
import solid_star from "../Images/solid_star.svg"

const Product = ({product, isFavorite, handleToggle}) => {

    
    return ( 
        <div className="w-full h-full">
            <div className="relative h-full border px-4 pb-2 border-grayish ">
                <button className="absolute left-3 top-3 "
                onClick={() =>{ 
                    handleToggle(product)
                }}
                >
                    {isFavorite ?
                    <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current text-red-400"
                    viewBox="0 0 576 512"><path d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z"/>
                    </svg>
                    :
                    <svg viewBox="0 0 17 16" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9767 5.79581C16.9497 5.7127 16.9 5.63879 16.8332 5.58243C16.7664 5.52606 16.6852 5.48948 16.5987 5.47681L11.6387 4.75581L9.4197 0.260809C9.38095 0.18237 9.32104 0.116332 9.24673 0.0701571C9.17242 0.0239824 9.08668 -0.000488281 8.9992 -0.000488281C8.91171 -0.000488281 8.82597 0.0239824 8.75166 0.0701571C8.67735 0.116332 8.61744 0.18237 8.5787 0.260809L6.3607 4.75581L1.3997 5.47681C1.31308 5.48938 1.23171 5.52593 1.16479 5.58234C1.09787 5.63874 1.04806 5.71275 1.02101 5.79599C0.99396 5.87922 0.990739 5.96837 1.01171 6.05334C1.03269 6.13831 1.07702 6.21572 1.1397 6.27681L4.7287 9.77681L3.8817 14.7168C3.86706 14.803 3.87679 14.8915 3.90978 14.9724C3.94277 15.0533 3.99772 15.1234 4.06842 15.1748C4.13912 15.2262 4.22277 15.2567 4.30993 15.2631C4.39708 15.2695 4.48428 15.2514 4.5617 15.2108L8.9997 12.8768L13.4357 15.2058C13.5131 15.2464 13.6003 15.2645 13.6875 15.2581C13.7746 15.2517 13.8583 15.2212 13.929 15.1698C13.9997 15.1184 14.0546 15.0483 14.0876 14.9674C14.1206 14.8865 14.1303 14.798 14.1157 14.7118L13.2687 9.77181L16.8577 6.27181C16.9195 6.21119 16.9634 6.13463 16.9844 6.05061C17.0054 5.96659 17.0027 5.8784 16.9767 5.79581ZM12.4377 9.27581C12.3832 9.32886 12.3425 9.39435 12.319 9.46665C12.2955 9.53895 12.2899 9.61587 12.3027 9.69081L13.0307 13.9378L9.2177 11.9318C9.15045 11.8965 9.07564 11.8781 8.9997 11.8781C8.92375 11.8781 8.84894 11.8965 8.7817 11.9318L4.9677 13.9368L5.6997 9.68981C5.71251 9.61487 5.70692 9.53795 5.68341 9.46565C5.65989 9.39336 5.61915 9.32786 5.5647 9.27481L2.4757 6.26781L6.7397 5.64781C6.81487 5.63691 6.88627 5.60792 6.94776 5.56333C7.00925 5.51873 7.05899 5.45988 7.0927 5.39181L8.9997 1.52781L10.9067 5.39181C10.9404 5.45988 10.9901 5.51873 11.0516 5.56333C11.1131 5.60792 11.1845 5.63691 11.2597 5.64781L15.5237 6.26781L12.4377 9.27581Z" fill="black"/>
                    </svg>
                }
                </button>
                <img src={product.image} alt="" className="w-full h-48 bg-cover"/>
                <div className="mt-3">
                    <span className="text-title text-xs">Aldo</span>
                    <p className="text-sm mb-8">{product.title}</p>
                    <div className="absolute bottom-2 right-3">
                        <p className="text-right leading-5 font-bold mt-1 text-base tracking-wider">US$ {product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Product;