
import React, { useState, useEffect, useCallback } from 'react';

// Tetris game constants
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const EMPTY_CELL = 0;

// Tetromino shapes (I, J, L, O, S, T, Z)
const TETROMINOES = [
  // I (Cyan)
  {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    color: 'bg-cyan-500',
  },
  // J (Blue)
  {
    shape: [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0]
    ],
    color: 'bg-blue-500',
  },
  // L (Orange)
  {
    shape: [
      [0, 0, 3],
      [3, 3, 3],
      [0, 0, 0]
    ],
    color: 'bg-orange-500',
  },
  // O (Yellow)
  {
    shape: [
      [4, 4],
      [4, 4]
    ],
    color: 'bg-yellow-500',
  },
  // S (Green)
  {
    shape: [
      [0, 5, 5],
      [5, 5, 0],
      [0, 0, 0]
    ],
    color: 'bg-green-500',
  },
  // T (Purple)
  {
    shape: [
      [0, 6, 0],
      [6, 6, 6],
      [0, 0, 0]
    ],
    color: 'bg-purple-500',
  },
  // Z (Red)
  {
    shape: [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0]
    ],
    color: 'bg-red-500',
  }
];

export function TetrisGame() {
  // Game state
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState(getRandomTetromino());
  const [position, setPosition] = useState({ x: 3, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Create empty game board
  function createEmptyBoard() {
    return Array.from({ length: BOARD_HEIGHT }, () => 
      Array(BOARD_WIDTH).fill(EMPTY_CELL)
    );
  }

  // Get random tetromino
  function getRandomTetromino() {
    const randomIndex = Math.floor(Math.random() * TETROMINOES.length);
    return TETROMINOES[randomIndex];
  }

  // Check if position is valid
  const isPositionValid = useCallback((tetromino, pos) => {
    for (let y = 0; y < tetromino.shape.length; y++) {
      for (let x = 0; x < tetromino.shape[y].length; x++) {
        if (tetromino.shape[y][x] !== 0) {
          const boardX = pos.x + x;
          const boardY = pos.y + y;

          // Check boundaries
          if (
            boardX < 0 || 
            boardX >= BOARD_WIDTH || 
            boardY >= BOARD_HEIGHT
          ) {
            return false;
          }

          // Check collision with other pieces
          if (boardY >= 0 && board[boardY][boardX] !== 0) {
            return false;
          }
        }
      }
    }
    return true;
  }, [board]);

  // Rotate piece
  const rotatePiece = useCallback(() => {
    if (gameOver || isPaused) return;
    
    const rotated = {
      ...currentPiece,
      shape: currentPiece.shape[0].map((_, index) =>
        currentPiece.shape.map(row => row[index]).reverse()
      )
    };

    if (isPositionValid(rotated, position)) {
      setCurrentPiece(rotated);
    }
  }, [currentPiece, position, isPositionValid, gameOver, isPaused]);

  // Move piece left
  const moveLeft = useCallback(() => {
    if (gameOver || isPaused) return;

    const newPosition = { x: position.x - 1, y: position.y };
    if (isPositionValid(currentPiece, newPosition)) {
      setPosition(newPosition);
    }
  }, [currentPiece, position, isPositionValid, gameOver, isPaused]);

  // Move piece right
  const moveRight = useCallback(() => {
    if (gameOver || isPaused) return;

    const newPosition = { x: position.x + 1, y: position.y };
    if (isPositionValid(currentPiece, newPosition)) {
      setPosition(newPosition);
    }
  }, [currentPiece, position, isPositionValid, gameOver, isPaused]);

  // Move piece down
  const moveDown = useCallback(() => {
    if (gameOver || isPaused) return;

    const newPosition = { x: position.x, y: position.y + 1 };
    
    if (isPositionValid(currentPiece, newPosition)) {
      setPosition(newPosition);
    } else {
      // Lock the piece into the board
      const newBoard = [...board];
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x] !== 0) {
            const boardY = position.y + y;
            if (boardY < 0) {
              setGameOver(true);
              return;
            }
            const boardX = position.x + x;
            newBoard[boardY][boardX] = currentPiece.shape[y][x];
          }
        }
      }

      // Check for completed lines
      const completedLines = checkCompletedLines(newBoard);
      const clearedBoard = clearLines(newBoard, completedLines);
      
      // Update score
      if (completedLines > 0) {
        const newScore = score + (completedLines * 100) * level;
        setScore(newScore);
        setLines(prev => {
          const newLines = prev + completedLines;
          // Level up every 10 lines
          if (Math.floor(newLines / 10) > Math.floor(prev / 10)) {
            setLevel(Math.floor(newLines / 10) + 1);
          }
          return newLines;
        });
      }

      // Set board and get next piece
      setBoard(clearedBoard);
      setCurrentPiece(getRandomTetromino());
      setPosition({ x: 3, y: 0 });
    }
  }, [board, currentPiece, position, isPositionValid, gameOver, isPaused, score, level]);

  // Hard drop piece
  const hardDrop = useCallback(() => {
    if (gameOver || isPaused) return;

    let dropDistance = 0;
    let newY = position.y;

    while (isPositionValid(currentPiece, { x: position.x, y: newY + 1 })) {
      newY++;
      dropDistance++;
    }

    setPosition({ x: position.x, y: newY });
    // Add bonus points for hard drop
    setScore(prev => prev + (dropDistance * 2));
    // Force moveDown to lock the piece
    moveDown();
  }, [currentPiece, position, isPositionValid, moveDown, gameOver, isPaused]);

  // Check for completed lines
  function checkCompletedLines(board) {
    return board.reduce((count, row, index) => {
      if (row.every(cell => cell !== 0)) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  // Clear completed lines
  function clearLines(board, completedLines) {
    if (completedLines === 0) return board;
    
    const newBoard = board.filter(row => !row.every(cell => cell !== 0));
    
    // Add new empty rows at the top
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }
    
    return newBoard;
  }

  // Draw current piece on the board
  function renderBoard() {
    const displayBoard = board.map(row => [...row]);
    
    // Add current piece to display board
    if (!gameOver) {
      for (let y = 0; y < currentPiece.shape.length; y++) {
        for (let x = 0; x < currentPiece.shape[y].length; x++) {
          if (currentPiece.shape[y][x] !== 0) {
            const boardY = position.y + y;
            const boardX = position.x + x;
            
            if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
              displayBoard[boardY][boardX] = currentPiece.shape[y][x];
            }
          }
        }
      }
    }
    
    return displayBoard;
  }

  // Get cell color based on value
  function getCellColor(value) {
    if (value === 0) return 'bg-gray-800';
    return TETROMINOES[value - 1].color;
  }

  // Handle keyboard input
  useEffect(() => {
    if (!gameStarted) return;

    function handleKeyDown(e) {
      if (gameOver) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          moveLeft();
          break;
        case 'ArrowRight':
          e.preventDefault();
          moveRight();
          break;
        case 'ArrowDown':
          e.preventDefault();
          moveDown();
          break;
        case 'ArrowUp':
          e.preventDefault();
          rotatePiece();
          break;
        case ' ':
          e.preventDefault();
          hardDrop();
          break;
        case 'p':
          e.preventDefault();
          setIsPaused(prev => !prev);
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted, gameOver, moveLeft, moveRight, moveDown, rotatePiece, hardDrop, isPaused]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;

    const speed = Math.max(100, 1000 - (level - 1) * 100);
    const gameInterval = setInterval(() => {
      moveDown();
    }, speed);
    
    return () => {
      clearInterval(gameInterval);
    };
  }, [gameStarted, gameOver, isPaused, level, moveDown]);

  // Start a new game
  const startGame = () => {
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomTetromino());
    setPosition({ x: 3, y: 0 });
    setGameOver(false);
    setScore(0);
    setLevel(1);
    setLines(0);
    setGameStarted(true);
    setIsPaused(false);
  };

  // Toggle pause
  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  // Render game controls for mobile
  const renderMobileControls = () => (
    <div className="grid grid-cols-3 gap-2 mt-4">
      <button
        className="p-4 bg-gray-700 rounded"
        onClick={moveLeft}
      >
        ←
      </button>
      <div className="grid grid-rows-2 gap-2">
        <button
          className="p-4 bg-gray-700 rounded"
          onClick={rotatePiece}
        >
          ↻
        </button>
        <button
          className="p-4 bg-gray-700 rounded"
          onClick={hardDrop}
        >
          ↓↓
        </button>
      </div>
      <button
        className="p-4 bg-gray-700 rounded"
        onClick={moveRight}
      >
        →
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-8">
      <h1 className="text-4xl font-bold mb-6">Tetris Game</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          {/* Game board */}
          <div className="grid grid-cols-10 gap-px border-2 border-gray-600 bg-gray-600">
            {renderBoard().map((row, y) => 
              row.map((cell, x) => (
                <div 
                  key={`${y}-${x}`} 
                  className={`${getCellColor(cell)} w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8`}
                />
              ))
            )}
          </div>

          {/* Overlay messages */}
          {!gameStarted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
              <button 
                onClick={startGame}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold text-xl"
              >
                Start Game
              </button>
            </div>
          )}

          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
              <div className="text-center">
                <p className="text-2xl font-bold mb-4">Game Paused</p>
                <button 
                  onClick={togglePause}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold"
                >
                  Resume
                </button>
              </div>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
              <div className="text-center">
                <p className="text-2xl font-bold mb-2">Game Over</p>
                <p className="text-xl mb-4">Score: {score}</p>
                <button 
                  onClick={startGame}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Game info and controls */}
        <div className="bg-gray-800 p-4 rounded-lg min-w-56">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Stats</h2>
            <div className="grid grid-cols-2 gap-2">
              <p>Score:</p>
              <p className="text-right">{score}</p>
              <p>Level:</p>
              <p className="text-right">{level}</p>
              <p>Lines:</p>
              <p className="text-right">{lines}</p>
            </div>
          </div>

          <div className="space-y-3">
            {gameStarted && (
              <button 
                onClick={togglePause}
                className={`w-full py-2 ${isPaused ? 'bg-blue-600 hover:bg-blue-700' : 'bg-yellow-600 hover:bg-yellow-700'} rounded font-medium`}
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
            )}
            <button 
              onClick={startGame}
              className="w-full py-2 bg-green-600 hover:bg-green-700 rounded font-medium"
            >
              {gameOver || !gameStarted ? 'Start Game' : 'Restart'}
            </button>
            <a 
              href="/"
              className="block w-full py-2 bg-gray-600 hover:bg-gray-700 rounded font-medium text-center"
            >
              Back to Portfolio
            </a>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Controls</h2>
            <ul className="text-sm space-y-1">
              <li>← → : Move</li>
              <li>↑ : Rotate</li>
              <li>↓ : Move Down</li>
              <li>Space : Hard Drop</li>
              <li>P : Pause/Resume</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile controls */}
      <div className="md:hidden mt-4 w-full max-w-xs">
        {gameStarted && !gameOver && !isPaused && renderMobileControls()}
      </div>
    </div>
  );
}
