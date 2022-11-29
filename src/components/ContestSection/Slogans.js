import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  line-height: 2rem;
`;

export const H2 = styled.div`
  font-size: 22px;
  padding-top: 1rem;
  padding-bottom: .5rem; 
`;

export const Wrapper = styled.div`
  padding-bottom: 1rem;
`;


function Slogans(props) { 
  return (
    <div>
          <div className='wrapper'>
        <Container>
        <h1>These slogans are from the API</h1>
        <hr/>
        {props.slogans.map((slogan) => {
            return (
              <div key={slogan.id}>
                <Wrapper>
                    <H2>{slogan.text}</H2>
                    <p>Submitted by: {slogan.first_name} {slogan.last_name}</p>
                    <p>{slogan.email}</p>
                  </Wrapper>
                    <hr/>
                </div>
            );
          })}
        </Container>
        <br/><br/><br/><br/>
        </div>
    </div>
  );
}

export default Slogans; 