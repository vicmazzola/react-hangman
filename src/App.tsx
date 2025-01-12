import {useState} from "react";
import styled from "styled-components";
import words from "./wordList.json"
import {HangmanDrawing} from "./components/HangmanDrawing.tsx"
import {HangmanWord} from "./components/HangmanWord.tsx"
import {Keyboard} from "./components/Keyboard.tsx"


function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

// Styled components
const AppContainer = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    align-items: center;
`;

const ResultText = styled.div`
    font-size: 2rem;
    text-align: center;
`;


function App() {

    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    return (
        <AppContainer>
            <ResultText>Lose Win</ResultText>
            <HangmanDrawing/>
            <HangmanWord/>
            <Keyboard/>

        </AppContainer>
    )


}

export default App
