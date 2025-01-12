import  {useState} from "react";
import words from "./wordList.json"
import {HangmanDrawing} from "./components/HangmanDrawing.tsx"
import {HangmanWord} from "./components/HangmanWord.tsx"
import {Keyboard} from "./components/Keyboard.tsx"


function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function App() {

    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    return (
        <div
            style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: "0 auto",
                alignItems: "center",
            }}
        >
            <div style={{fontSize: "2rem", textAlign: "center"}}>Lose Win</div>
            <HangmanDrawing/>
            <HangmanWord/>
            <Keyboard/>

        </div>
    )


}

export default App
