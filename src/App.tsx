import {useCallback, useEffect, useState} from "react";
import {HangmanDrawing} from "./components/HangmanDrawing.tsx";
import {HangmanWord} from "./components/HangmanWord.tsx";
import {Keyboard} from "./components/Keyboard.tsx";
import words from "./wordList.json";
import {
    AppBackground,
    AppContainer,
    ResultText,
    KeyboardWrapper,
    ResetButton,
    Title,
    Subtitle,
    GameWrapper
} from "./App.styles";

function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    );

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess
        .split("")
        .every((letter) => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return;

            setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        },
        [guessedLetters, isWinner, isLoser]
    );

    const resetGame = () => {
        setGuessedLetters([]);
        setWordToGuess(getWord());
    };


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        };

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [guessedLetters, addGuessedLetter]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (key !== "Enter") return;

            e.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(getWord());
        };

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, []);

    return (
        <AppBackground>
            <GameWrapper>
                <AppContainer>
                    <Title>Guess the Word</Title>
                    <Subtitle>(English words only)</Subtitle>
                    <ResultText>
                        {isWinner && "Winner! - Refresh to try again"}
                        {isLoser && "Nice Try - Refresh to try again"}
                    </ResultText>
                    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
                    <HangmanWord
                        reveal={isLoser}
                        guessedLetters={guessedLetters}
                        wordToGuess={wordToGuess}
                    />

                    {/* Conditionally render Reset Button or Keyboard */}
                    {isWinner || isLoser ? (
                        <ResetButton onClick={resetGame}>Play Again</ResetButton>
                    ) : (
                        <KeyboardWrapper>
                            <Keyboard
                                disabled={isWinner || isLoser}
                                activeLetters={guessedLetters.filter((letter) =>
                                    wordToGuess.includes(letter)
                                )}
                                inactiveLetters={incorrectLetters}
                                addGuessedLetter={addGuessedLetter}
                            />
                        </KeyboardWrapper>
                    )}
                </AppContainer>
            </GameWrapper>

        </AppBackground>
    );
}

export default App;
