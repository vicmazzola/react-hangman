import {useState} from "react";
import words from "./wordList.json"


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
        </div>
    )


}

export default App
