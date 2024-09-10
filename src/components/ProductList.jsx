import { useState } from 'react';
import {data} from '../data';

export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {
    
    const [showMensaje, setShowMensaje]= useState(false);

    const onAddProducts = product => {

        if(allProducts.find(item => item.id === product.id )){
            const products = allProducts.map(item => 
                item.id === product.id 
                    ? {...item, quantity: item.quantity + 1}
                    : item
                );

            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            setShowMensaje(true);
            setTimeout(() => {
                setShowMensaje(false);
            }, 2000);
            return setAllProducts([...products]);
        };
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
        setShowMensaje(true);
        setTimeout(() => {
            setShowMensaje(false);
        }, 2000);
        
    };
   
    return(
        <>
            {showMensaje && <div className="message">¡Producto añadido al carrito!</div>}
            <div className="container-items">
                {
                    data.map( product => (
                        <div className="item" key={product.id}>
                            <figure>
                                <img
                                    src= { product.urlImage }
                                    alt= { product.nameProduct }
                                />
                            </figure>
                            <div className="info-product">
                                <h2> {product.nameProduct} </h2>
                                <p className="price"> Gs {product.price.toLocaleString()} </p>
                                <button
                                    onClick={() => onAddProducts(product)}
                                    className="btn-add-cart"
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};