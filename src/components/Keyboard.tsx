import styled from "styled-components";

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

type KeyboardProps = {
    disabled?: boolean;
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
};

// Styled Components
const KeyboardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
    gap: 0.5rem;
    
    @media (max-width: 600px) {
        gap: 0.3rem;
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); /* Smaller buttons */
    }
`;

const KeyButton = styled.button<{ $isActive: boolean; $isInactive: boolean }>`
    width: 100%;
    aspect-ratio: 1 / 1;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem;
    border: 3px solid black;
    background: ${(props) =>
            props.$isActive
                    ? "hsl(200, 100%, 50%)"
                    : props.$isInactive
                            ? "gray"
                            : "none"};
    color: ${(props) =>
            props.$isActive || props.$isInactive ? "white" : "black"};
    cursor: ${(props) =>
            props.$isActive || props.$isInactive ? "not-allowed" : "pointer"};
    opacity: ${(props) => (props.$isInactive ? 0.3 : 1)};
    transition: background-color 0.3s, transform 0.2s;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
        background-color: ${(props) =>
                props.$isActive || props.$isInactive ? "" : "hsl(200, 100%, 75%)"};
        transform: ${(props) =>
                props.$isActive || props.$isInactive ? "none" : "scale(1.1)"};
    }

    &:disabled {
        cursor: not-allowed;
    }

    @media (max-width: 600px) {
        font-size: 1.8rem; /* Smaller font size */
        padding: 0.3rem; /* Reduced padding */
    }
`;


export function Keyboard({
                             activeLetters,
                             inactiveLetters,
                             addGuessedLetter,
                             disabled = false,
                         }: KeyboardProps) {
    return (
        <KeyboardContainer>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);

                return (
                    <KeyButton
                        key={key}
                        onClick={() => addGuessedLetter(key)}
                        $isActive={isActive}
                        $isInactive={isInactive}
                        disabled={isActive || isInactive || disabled}

                    >
                        {key}
                    </KeyButton>
                );
            })}
        </KeyboardContainer>
    );
}