import React from 'react';
import ProductCard from './ProductCard';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img33 from '../assets/img33.jpg';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const Home = () => {
    const productList = [
        {
            name: "mac book",
            price: 12000,
            imgsrc: img1,
            id: 1
        },
        {
            name: "aripods",
            price: 99,
            imgsrc: img2,
            id: 2
        },
        {
            name: "aripods",
            price: 99,
            imgsrc: img3,
            id: 3
        },
        {
            name: "aripods",
            price: 99,
            imgsrc: img33,
            id: 4
        },
        {
            name: "mac book",
            price: 12000,
            imgsrc: img1,
            id: 5
        },
        {
            name: "aripods",
            price: 99,
            imgsrc: img2,
            id: 6
        },
        {
            name: "aripods",
            price: 99,
            imgsrc: img3,
            id: 7
        },
        {
            name: "aripods",
            price: 99,
            imgsrc: img33,
            id: 8
        },
    ];

    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
        dispatch({type:"addToCart", payload:options});
        toast.success("Added to cart");
        
        dispatch({
            type :"calculatePrice",
        })


    }
    return (
        <div className='home'>
            {
                productList.map((i) => (
                    <ProductCard key={i.id}
                        imgsrc={i.imgsrc}
                        name={i.name}
                        price={i.price}
                        id={i.id}
                        handler={addToCartHandler} />

                )

                )
            }
        </div>
    )
}

export default Home