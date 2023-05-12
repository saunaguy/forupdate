import React, { useState, useEffect } from 'react';
import "./Brick.css"



const App = () => {
  const [playerPos, setPlayerPos] = useState({ x: 0});
  const [enemies, setEnemies] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setPlayerPos((prevPos) => ({ ...prevPos, x: prevPos.x - 30 }));
      } else if (event.key === 'ArrowRight') {
        setPlayerPos((prevPos) => ({ ...prevPos, x: prevPos.x + 30 }));
      } else if (event.key === 'z') {
        setEnemies((prevEnemies) => prevEnemies.slice(0, -1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnemies((prevEnemies) => [
        ...prevEnemies,
        { id: Date.now(), x: Math.random() * window.innerWidth, y: 0 }, //id값을 객체 식별을 위해 date로
      ]);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const collision = enemies.find(
      (enemy) => Math.abs(enemy.x - playerPos.x) < 50 && enemy.y > window.innerHeight - 100
    );

    if (collision) {
      setGameOver(true);
    }
  }, [enemies, playerPos]);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {gameOver && <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Game Over</h1>}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: playerPos.x,
          width: 50,
          height: 50,
          backgroundColor: 'red',
        }}
      />
      {enemies.map((enemy) => (
        <div
          key={enemy.id}
          style={{
            position: 'absolute',
            top: enemy.y,
            left: enemy.x,
            width: 50,
            height: 50,
            backgroundColor: 'green',
          }}
        />
      ))}
    </div>
  );
};

export default App;