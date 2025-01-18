import styled from "styled-components";

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
};

// Styled Components
const WordContainer = styled.div`
    display: flex;
    gap: 0.25em;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
    @media (max-width: 600px) {
        font-size: 4rem; 
        gap: 0.15em; 
    }

    @media (max-width: 400px) {
        font-size: 3rem; 
        gap: 0.1em;
    }
`;

const LetterContainer = styled.span`
  border-bottom: 0.1em solid black;
`;

const Letter = styled.span<{ $isVisible: boolean; $isIncorrect: boolean }>`
    visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
    color: ${(props) => (props.$isIncorrect ? "red" : "black")};
`;

export function HangmanWord({
                                guessedLetters,
                                wordToGuess,
                                reveal = false,
                            }: HangmanWordProps) {
    return (
        <WordContainer>
            {wordToGuess.split("").map((letter, index) => {
                const isVisible = guessedLetters.includes(letter) || reveal;
                const isIncorrect = !guessedLetters.includes(letter) && reveal;

                return (
                    <LetterContainer key={index}>
                        <Letter $isVisible={isVisible} $isIncorrect={isIncorrect}>
                            {letter}
                        </Letter>
                    </LetterContainer>
                );
            })}
        </WordContainer>
    );
}
