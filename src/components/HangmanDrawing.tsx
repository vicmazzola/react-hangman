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
`;

const Body = styled.div`
    width: 10px;
    height: 100px;
    background: black;
    position: absolute;
    top: 120px;
    right: 0;
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
`;


const Pole = styled.div`
    height: 50px;
    width: 10px;
    background: black;
    position: absolute;
    top: 0;
    right: 0;
`;

const TopBar = styled.div`
    height: 10px;
    width: 200px;
    background: black;
    margin-left: 120px;
`;

const VerticalBar = styled.div`
    height: 400px;
    width: 10px;
    background: black;
    margin-left: 120px;
`;

const Base = styled.div`
    height: 10px;
    width: 250px;
    background: black;
`;

const HangmanWrapper = styled.div`
    position: relative;
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