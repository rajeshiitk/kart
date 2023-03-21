import React from 'react';

const ProductCard = ({name,id,price,handler,imgsrc}) => {
  return (
    <div className='productCard'>
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1, imgsrc})}>Add to cart</button>
    </div>
  )
}

export default ProductCard