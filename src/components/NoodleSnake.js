import React, { useEffect, useState, useRef } from "react";
import "./NoodleSnake.css";

const gridSize = 10;
const initialSnake = [[0, 0]];
const initialFood = [5, 5];
const directions = {
  ArrowUp: [-1, 0],
  ArrowDown: [1, 0],
  ArrowLeft: [0, -1],
  ArrowRight: [0, 1],
};

const NoodleSnake = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState("ArrowRight");
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );
  const [speed, setSpeed] = useState(300);
  const moveRef = useRef();

  const eatingSound = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_a874e2b5b5.mp3?filename=bubble-pop-99344.mp3"
  );

  const getRandomPosition = () => [
    Math.floor(Math.random() * gridSize),
    Math.floor(Math.random() * gridSize),
  ];

  useEffect(() => {
    moveRef.current = moveSnake;
  });

  useEffect(() => {
    const interval = setInterval(() => moveRef.current(), speed);
    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (directions[e.key]) setDirection(e.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const moveSnake = () => {
    if (isGameOver) return;

    const [dx, dy] = directions[direction];
    const newHead = [snake[0][0] + dx, snake[0][1] + dy];

    if (
      newHead[0] < 0 ||
      newHead[1] < 0 ||
      newHead[0] >= gridSize ||
      newHead[1] >= gridSize
    ) {
      setIsGameOver(true);
      return;
    }

    for (let segment of snake) {
      if (segment[0] === newHead[0] && segment[1] === newHead[1]) {
        setIsGameOver(true);
        return;
      }
    }

    const newSnake = [newHead, ...snake];

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      eatingSound.play();
      const newScore = score + 1;
      setScore(newScore);
      setFood(getRandomPosition());

      if (newScore % 3 === 0 && speed > 100) {
        setSpeed(speed - 30);
      }

      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem("highScore", newScore);
      }
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const isSnakeHere = (x, y) =>
    snake.some((segment) => segment[0] === x && segment[1] === y);

  const isFoodHere = (x, y) => food[0] === x && food[1] === y;

  const resetGame = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection("ArrowRight");
    setIsGameOver(false);
    setScore(0);
    setSpeed(300);
  };

  return (
    <div className="snake-wrapper">
      <h2>🍜 Snake of Noodles</h2>
      <div className="instructions">
        <p><strong>🎮 How to Play:</strong></p>
        <ul>
          <li>Use your ⬆️⬇️⬅️➡️ arrow keys to move the noodle.</li>
          <li>Eat 🍤 shrimp to grow and score points!</li>
          <li>Avoid hitting the wall or your own tail.</li>
          <li>Speed increases as you grow — stay sharp!</li>
        </ul>
      </div>
      <div className="stats">
        <span>⭐ Score: {score}</span>
        <span>🏆 High Score: {highScore}</span>
        <span>⚡ Speed: {speed}ms</span>
      </div>
      {isGameOver && (
        <div className="game-over">
          💥 Game Over!{" "}
          <button className="play-again" onClick={resetGame}>
            🔁 Play Again
          </button>
        </div>
      )}
      <div className="grid">
        {Array.from({ length: gridSize }).map((_, row) =>
          Array.from({ length: gridSize }).map((_, col) => {
            let content = "";
            if (isSnakeHere(row, col)) content = "🍜";
            else if (isFoodHere(row, col)) content = "🍤";
            return (
              <div key={`${row}-${col}`} className="cell">
                {content}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default NoodleSnake;
