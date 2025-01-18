import styled from "styled-components";

export const AppContainer = styled.div`
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    @media (max-width: 600px) {
        gap: 1.5rem; 
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

    /* Responsive Typography */
    font-size: calc(16px + 0.5vw);
`;
