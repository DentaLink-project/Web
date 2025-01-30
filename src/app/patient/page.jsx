'use client'

import React from 'react'
import HeaderSection from '@/components/ui/HeaderSection/HeaderSection'
import patientsData from '@/data/patientsData'
import PatientList from '@/components/patient/PatientList'
const patientPage = () => {
  return (
    <div className=''>
    <HeaderSection imgURL='/images/patient/patientHeader.png' textDir='center' title="Appropriate Patients" subtitle='Let’s Find ' />
    <div className='flex flex-col items-center mt-10  '>
      {
        patientsData.map(patientItem => (
          <div key={patientItem.category} className='flex flex-col mb-24 justify-center w-5/6'>
            <h1 className='text-4xl'>{patientItem.category}</h1>
            <PatientList patients={patientItem.patients} />
          </div>
        ))
  }
    </div>
    
  </div>
  )
}

export default patientPage