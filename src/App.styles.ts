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
