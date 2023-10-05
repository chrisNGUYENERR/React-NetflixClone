import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres, getUserLikedMovies } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';
import Card from '../components/Card';



const Container = styled.div`
    .content {
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1 {
            margin-left: 3rem;
        }
        .grid {
            flex-wrap: wrap;
            gap: 1rem
        }
    }
`;

export default function UserLiked() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [email, setEmail] = useState(undefined);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.netflix.movies);


    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (currentUser) {
                setEmail(currentUser.email); 
            } else {
                navigate('/login')
            }
        });
    }, [navigate]);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    useEffect(() => {
        if (email) {
            dispatch(getUserLikedMovies(email));
        }
    },[dispatch, email]);

  return (
    <Container>
        <Navbar isScrolled={isScrolled} />
        <div className="content flex column">
            <h1>My List</h1>
            <div className="grid flex">
                {movies && movies.map((movie, index) => {
                    return (<Card movieData={movie} index={index} key={movie.id} isLiked={true} />)
                })}
            </div>
        </div>
    </Container>
  )
}
