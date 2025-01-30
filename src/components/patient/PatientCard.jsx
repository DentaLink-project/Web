'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Button from '../ui/Button/Button'
import favFilled from '../../../public/images/icons/fav.svg'
import fav from '../../../public/images/icons/favheart.svg'
const PatientCard = ({ patient }) => {
   const [isFavorite, setIsFavorite] = useState(false); 
    const handleFavoriteClick = () => {
        setIsFavorite((prev) => !prev); 
    };
    return (
        <div className="card flex flex-row justify-center items-center border gap-5 border-primary shadow-lg rounded-lg py-3 px-5 w-full md:w-[49%]">
        <div>
            <Image
                src={patient.image}
                alt={patient.name}
                width={270}
                height={200}
                className="rounded"
            />
        </div>

        <div className="flex flex-col text-left justify-start w-full gap-2">
            <div className="flex flex-row justify-between">
                <h4 className="font-semibold sm:text-l md:text-l lg:text-xl">{patient.doctor}</h4>
                <button onClick={handleFavoriteClick} className="focus:outline-none">
                    <Image
                        src={isFavorite ? favFilled : fav}
                        alt={isFavorite ? 'Favorited' : 'Not Favorited'}
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            <p className="text-primary">{patient.name}</p>
            <p className="text-gray-400">{patient.location}</p>
            <Button title="See More" link="/" />
        </div>
    </div>
    )
}

export default PatientCard
