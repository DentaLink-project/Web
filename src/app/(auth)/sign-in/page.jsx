'use client'
import React from 'react';
import loginImg from '../../../../public/images/login.png';
import AuthCard from '@/components/auth/AuthCard';
const signinPage = () => {
  return (
    <>
      <AuthCard img={loginImg} formType='login' />
    </>
  
  );
};

export default signinPage;
