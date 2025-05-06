
import React from 'react';
import { TetrisGame } from '@/components/TetrisGame';
import { Link } from 'react-router-dom';

const TetrisPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="py-4 bg-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Tetris Game</h1>
          <Link 
            to="/" 
            className="text-white hover:text-gray-300 text-sm"
          >
            Back to Portfolio
          </Link>
        </div>
      </header>
      
      <main>
        <TetrisGame />
      </main>
    </div>
  );
};

export default TetrisPage;
