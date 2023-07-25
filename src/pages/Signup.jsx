import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

const Container = styled.div`
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        .body {
            gap: 1rem;
            .text {
                gap: 1rem;
                text-align: center;
                font-size: 2rem;
                h1 {
                    padding: 0 25rem;
                }
            }
            .form {
                display: flex;
                flex-direction: row;
                width: 60%;
                input {
                    color: black;
                    border: none;
                    padding: 1.5rem;
                    font-size: 1.2rem;
                    border: 1px solid black;
                    flex-grow: 1;

                    &:focus {
                        outline: none;
                    }
                }
                button {
                    padding: 0.5rem 1rem;
                    background-color: #e50914;
                    border: none;
                    cursor: pointer;
                    color: white;
                    font-weight: bolder;
                    font-size: 1.05rem;
                }
            }
            button {
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
            }
        }
    }
    .header {
        flex-grow: 1;
    }
    .login {
        flex-grow: 2;
    }
`; 

export default function Signup() {
    
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [formInputs, setFormInputs] = useState({
        email: '',
        password: '',
    });

    const handleSignIn = async () => {
        console.log(formInputs)
    }

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header className='header' login showPasswordBox={showPasswordBox}/>
        <div className="login body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h6>Ready to watch? Enter your e-mail to create or restart membership</h6>
            </div>
            <div className="form">
                <input 
                    type='email' 
                    placeholder='Email Address' 
                    name='email' 
                    value={formInputs.email} 
                    onChange={(e)=> 
                        setFormInputs({
                            ...formInputs, 
                            [e.target.name] : e.target.value
                        })
                    } 
                />
                {showPasswordBox && (
                    <input 
                    type="password" 
                    placeholder='Password' 
                    name='password' 
                    value={formInputs.password} 
                    onChange={(e)=> 
                        setFormInputs({
                            ...formInputs, 
                            [e.target.name] : e.target.value
                        })
                    }  
                    />
                    )}
                {!showPasswordBox && (
                    <button onClick={()=>setShowPasswordBox(true)}>Get Started</button>
                )}
            </div>
                <button onClick={handleSignIn} >Sign-Up</button>
        </div>
      </div>
    </Container>
  )
}
