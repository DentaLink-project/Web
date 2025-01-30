import React from 'react'
import { useState } from 'react'
import InputField from '../ui/Input/InputField';
import Button from '../ui/Button/Button';
import Link from 'next/link';
const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [fNameError, setFNameError] = useState('');
    const [lNameError, setLNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPasswordError] = useState('');
    const [confirmPassError, setConfirmPassError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName == "") {
            setFNameError("First Name is Required");
        }
        if (lastName == "") {
            setLNameError("Last Name is Required");
        }
        if (email == "") {
            setEmailError("Email is Required");
        }
        if (password == "") {
            setPasswordError("Password is required");
        }
        if (confirmPassword == "") {
            setConfirmPassError("confirm Password  is Required");
        }

    }


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setFNameError("");
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setLNameError("");
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPassError("");
    }





    return (
        <div className=' w-full flex flex-col gap-5 justify-center items-center h-full' style={{ background: '#F0F0F0' }}>
            <h1 className=' text-3xl'>Sign UP</h1>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3'>
                <InputField type='text' placeholder="First Name" name='firstName' value={firstName} onChange={handleFirstName} error={fNameError} />
                <InputField type='text' placeholder="Last Name" name="lastName" value={lastName} onChange={handleLastName} error={lNameError} />
                <InputField type='email' placeholder="Email" name="email" value={email} onChange={handleEmail} error={emailError} />
                <InputField type='password' placeholder="Password" name="password" value={password} onChange={handlePassword} error={passError} />
                <InputField type='password' placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} error={confirmPassError} />
                <Button onClick={() => { }} title='Sign Up' />
            </form>
            <h2 className='text-lg'>Already have account? <Link href="/sign-in" className=' text-primary '>Sign In</Link></h2>

        </div>
    )
}

export default SignupForm