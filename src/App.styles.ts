import styled from "styled-components";

export const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: scale(1); 
    
    @media (min-width: 1200px) {
        transform: scale(0.8); 
    }

    @media (min-width: 1600px) {
        transform: scale(0.7); 
    }
    
    @media (max-width: 1280px) and (max-height: 720px) {
        transform: scale(0.85); 
    }
`;

export const AppContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    @media (max-width: 600px) {
        gap: 1.5rem; 
    }

    @media (max-width: 1280px) and (max-height: 720px) {
        gap: 1rem; 

`;

export const Title = styled.h1`
    font-size: 3rem;
    font-style: italic;
    color: white;
    margin-bottom: 1rem; 

    @media (max-width: 600px) {
        font-size: 2.5rem; 
    }

    @media (max-width: 400px) {
        font-size: 2rem;
    }

    @media (max-width: 1280px) and (max-height: 720px) {
        font-size: 2.7rem; 
    }
    
`;

export const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-style: italic;
    color: #cccccc;
    margin-bottom: 1.5rem; 

    @media (max-width: 600px) {
        font-size: 1.2rem; 
    }

    @media (max-width: 400px) {
        font-size: 1rem;
    }

   
`;


export const ResultText = styled.div`
    font-size: 2rem;
    text-align: center;
`;

export const KeyboardWrapper = styled.div`
    align-self: stretch;

    
    
`;


export const ResetButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    background-color: #6a11cb;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2575fc;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
    }
`;



export const AppBackground = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc); /* Static Purple to Blue Gradient */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    font-family: "Arial", sans-serif;
    overflow: hidden;

    /* Responsive Typography */
    font-size: calc(16px + 0.5vw);
`;
