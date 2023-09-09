import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
    
`;

export default function CardSlider({ data, title }) {
  return (
    <Container className='flex column'>
        <div className='flex'>
            {data.map((movie, index) => {
                    return <Card movieData={movie} index={index} key={movie.id} />
            })}
        </div>
    </Container>
  )
}
