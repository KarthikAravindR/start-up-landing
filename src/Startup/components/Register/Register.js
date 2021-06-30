import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'

import classes from './Register.module.css'
import development1 from '../../../assets/images/register.jpg'

const Register = props => {
    const [validFirst, setValidFirst] = useState(true)
    const [validLast, setValidLast] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validNumber, setValidNumber] = useState(true)
    const [First, setFirst] = useState()
    const [Last, setLast] = useState()
    const [Email, setEmail] = useState()
    const [Number, setNumber] = useState()
    const [message, setMessage] = useState()
    const firstverificationHandler = e => {
        if (e.target.value.length === 0) {
            setValidFirst(false)
        } else {
            setValidFirst(true)
        }
        setFirst(e.target.value)
    }
    const lastverificationHandler = e => {
        if (e.target.value.length === 0) {
            setValidLast(false)
        } else {
            setValidLast(true)
        }
        setLast(e.target.value)
    }
    const emailverificationHandler = e => {
        if (e.target.value) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            setValidEmail(pattern.test(e.target.value) && e.target.value)
        }
        setEmail(e.target.value)
    }
    const numberverificationHandler = e => {
        if (e.target.value.length > 10) {
            setValidNumber(true)
        } else {
            setValidNumber(false)
        }
        setNumber(e.target.value)
    }
    const resetForm = () => {
        setValidFirst(true)
        setValidLast(true)
        setValidEmail(true)
        setValidNumber(true)
        setFirst('')
        setLast('')
        setEmail('')
        setNumber('')
    }
    const FormSubmitHandler = e => {
        e.preventDefault()
        let templateParams = {
            from_name: Email,
            to_name: 'mohanraj1302@gmail.com',
            subject: 'My Information for The Beginner Consultation',
            message1: `My Name is ${First} ${Last} and My Mobile Number is ${Number} ${message}`,
            message2: `${message}`,
        }
        emailjs.send('service_l010x7b', 'template_5s4g53s', templateParams, 'user_c0e4KLfuaMGxq4V4OddEz')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        resetForm()
    }


    return (
        <div className={classes.registerContainer}>
            <div className={classes.registerImage}>
                <img src={development1} alt="" />
            </div>
            <div className={classes.registerForm}>
                <h2>Take The First Step Forward</h2>
                <form>
                    <div className={classes.userbox}>
                        <input type="text" name="" required="" placeholder="First Name" onChange={firstverificationHandler} />
                        {!validFirst && <p className={classes.invalid}>This field is required</p>}
                    </div>
                    <div className={classes.userbox}>
                        <input type="text" name="" required="" placeholder="Last Name" onChange={lastverificationHandler} />
                        {!validLast && <p className={classes.invalid}>This field is required</p>}
                    </div>
                    <div className={classes.userbox}>
                        <input type="text" name="" required="" placeholder="Email" onChange={emailverificationHandler} />
                        {!validEmail && <p className={classes.invalid}>Enter a valid Email ID</p>}
                    </div>
                    <div className={classes.userbox}>
                        <input type="tel" name="" required="" placeholder="phone" onChange={numberverificationHandler} />
                        {!validNumber && <p className={classes.invalid}>Enter a valid Mobile Number</p>}
                    </div>
                    <div className={classes.userbox}>
                        <textarea placeholder="Any message" onChange={e => {setMessage(e.target.value)}} />
                        {!validNumber && <p className={classes.invalid}>Enter a valid Mobile Number</p>}
                    </div>
                    <button className={classes.submit_button} disabled={!validEmail || !validFirst || !validLast || !validNumber} onClick={FormSubmitHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                            Submit
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Register