import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button/Button';
import favFilled from '../../../public/images/icons/fav.svg'
import fav from '../../../public/images/icons/favheart.svg'
const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <div className="card flex flex-col border border-primary gap-5 flex-center items-center shadow-lg rounded-lg py-4 w-60 ">
      <div >
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={160}
          className="rounded"
        />
      </div>

      <div className="flex flex-col text-left w-full gap-5">
        <div className='flex flex-row justify-around'>
          <h4 className="font-semibold ">{product.name}</h4>
          <button onClick={handleFavoriteClick} className="focus:outline-none">
            <Image
              src={isFavorite ? favFilled : fav}
              alt={isFavorite ? 'Favorited' : 'Not Favorited'}
              width={30}
              height={30}
            />
          </button>        </div>
        <p className="pl-5">{product.price}</p>
        <div className='flex justify-center items-center'>
          <Button title='buy' link='/buy' color="white" />
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
