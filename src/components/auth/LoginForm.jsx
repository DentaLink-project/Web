"use client"
import React from 'react'
import Link from 'next/link'
import InputField from '../ui/Input/InputField'
import Button from '../ui/Button/Button'
import { useState } from 'react'
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError('');

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email=='') {
            setEmailError('Email is required');
        }
        if( password=='') {
            setPasswordError('Password is required');
        }
        
        console.log(email, password);
    }
    return (
        <div className=' w-full flex flex-col gap-5 justify-center items-center h-full' style={{  background: '#F0F0F0' }}>
            <h1 className=' text-3xl'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5'>
                <InputField type='email' placeholder="Email" name='email' value={email} onChange={handleEmail} error={emailError} />
                <InputField type='passsword' placeholder="Password" name="password" value={password} onChange={handlePassword} error={passwordError} />
                <Button onClick={()=>{}} title='Sign In' />
            </form>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <Link href="/reset" className=' text-primary '>Forget Password?</Link>
                <h2 className='text-lg'>Create new account? <Link href="/sign-up" className=' text-primary '>Sign Up</Link></h2>
            </div>

        </div>
    )
}

export default LoginForm