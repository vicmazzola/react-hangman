import styled from "styled-components";

type HangmanDrawingProps = {
    numberOfGuesses: number;
};


// Styled Components
const Head = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 10px solid black;
    position: absolute;
    top: 50px;
    right: -30px;

    @media (max-width: 600px) {
        width: 35px;
        height: 35px;
        border: 8px solid black;
        top: 40px;
        right: -20px;
    }
`;

const Body = styled.div`
    width: 10px;
    height: 100px;
    background: black;
    position: absolute;
    top: 120px;
    right: 0;
    
    @media (max-width: 600px) {
        width: 8px;
        height: 80px;
        top: 100px;
    }
`;

const RightArm = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 150px;
    right: -100px;
    rotate: -30deg;
    transform-origin: left bottom;

    @media (max-width: 600px) {
        width: 70px;
        height: 8px;
        top: 130px;
        right: -70px;
    }
    
`;

const LeftArm = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 150px;
    right: 10px;
    rotate: 30deg;
    transform-origin: right bottom;

    @media (max-width: 600px) {
        width: 70px;
        height: 8px;
        top: 130px;
        right: 5px;
    }
`;

const RightLeg = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 210px;
    right: -90px;
    rotate: 60deg;
    transform-origin: left bottom;

    @media (max-width: 600px) {
        width: 70px;
        height: 8px;
        top: 180px;
        right: -65px;
    }
`;

const LeftLeg = styled.div`
    width: 100px;
    height: 10px;
    background: black;
    position: absolute;
    top: 210px;
    right: 0;
    rotate: -60deg;
    transform-origin: right bottom;

    @media (max-width: 600px) {
        width: 70px;
        height: 8px;
        top: 180px;
    }
`;


const Pole = styled.div`
    height: 50px;
    width: 10px;
    background: black;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 5px;
    
    @media (max-width: 600px) {
        height: 40px;
        width: 8px;
    }
`;


const TopBar = styled.div`
    height: 10px;
    width: 200px;
    background: black;
    margin-left: 120px;

    @media (max-width: 600px) {
        height: 8px;
        width: 150px;
        margin-left: 90px;
    }
    
`;

const VerticalBar = styled.div`
    height: 400px;
    width: 10px;
    background: black;
    margin-left: 120px;

    @media (max-width: 600px) {
        height: 300px;
        width: 8px;
        margin-left: 90px;
    }
    
`;

const Base = styled.div`
    height: 10px;
    width: 250px;
    background: linear-gradient(to right, #3d3d3d, #1a1a1a);
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

    @media (max-width: 600px) {
        height: 8px;
        width: 200px;
    }
    
`;

const HangmanWrapper = styled.div`
    position: relative;

    @media (max-width: 600px) {
        transform: scale(0.8); /* Scale down the entire hangman for smaller screens */
    }
    
`;


// Drawing Parts in Order
const parts = [
    Head,
    Body,
    RightArm,
    LeftArm,
    RightLeg,
    LeftLeg,
];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <HangmanWrapper>
            {/* Fixed Elements */}
            <Pole />
            <TopBar />
            <VerticalBar />
            <Base />
            {/* Conditional Elements */}
            {parts.slice(0, numberOfGuesses).map((Part, index) => (
                <Part key={index} />
            ))}
        </HangmanWrapper>
    );
}