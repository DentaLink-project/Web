import React from 'react'
import PatientCard from './PatientCard'
const PatientList = ({ patients }) => {
        return (
                <div className=' '>
                        <div className="flex flex-row flex-wrap justify-center pt-8 gap-5 relative w-full ">

                                {patients.map((patient, i) => (

                                        <PatientCard patient={patient} key={i} />
                                ))}

                        </div>
                </div>
        )
}

export default PatientList