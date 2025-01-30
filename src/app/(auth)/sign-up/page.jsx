'use client'
import React from 'react';

import signupImg from '../../../../public/images/signup.png';
import AuthCard from '@/components/auth/AuthCard';
const signupPage = () => {
  return (
    <>
      <AuthCard img={signupImg} formType='signup' />
    </>
  )
}

export default signupPage