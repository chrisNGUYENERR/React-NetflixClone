import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

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

        .form-container {
            gap: 2rem;
            height: 85vh;

            .form {
                padding: 2rem;
                background-color: #000000b0;
                width: 25vw;
                gap: 2rem;
                color: white;
                
                .container {
                    gap: 2rem;
                    
                    input {
                        padding: 0.5rem 1rem;
                        width: 15rem;
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
        }
    }

    .header {
        flex-grow: 1;
    }

    .login {
        flex-grow: 2;
    }
`; 

export default function Login() {
    
    const [formInputs, setFormInputs] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { email, password } = formInputs;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (currentUser) navigate('/');
        });
    }, [navigate]);


  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
            <div className="form flex column a-center j-center">
                <div className="title">
                    <h3>Login</h3>
                </div>
                <div className="container flex column">
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
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
      </div>
    </Container>
  )
}
