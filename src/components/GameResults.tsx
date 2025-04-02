"use client";

import React from 'react';
import { Button } from '../components/ui/button';
import { getCountryNameByCode } from '../data/countries';

interface GameResultsProps {
  score: number;
  totalCorrect: number;
  totalNeighbors: number;
  missedNeighbors: string[];
  onNextRound: () => void;
}

const GameResults: React.FC<GameResultsProps> = ({
  score,
  totalCorrect,
  totalNeighbors,
  missedNeighbors,
  onNextRound
}) => {
  const percentage = Math.round((totalCorrect / totalNeighbors) * 100);
  
  return (
    <div className="mt-6 p-4 bg-card rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-2">Round Results</h3>
      
      <div className="text-center mb-4">
        <p className="text-3xl font-bold mb-1">{score} points</p>
        <p className="text-muted-foreground">
          You found {totalCorrect} out of {totalNeighbors} neighbors ({percentage}%)
        </p>
      </div>
      
      {missedNeighbors.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium mb-1">You missed:</p>
          <div className="flex flex-wrap gap-1">
            {missedNeighbors.map(code => (
              <span key={code} className="px-2 py-1 bg-muted rounded-md text-xs">
                {getCountryNameByCode(code)}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <Button 
        className="w-full mt-2" 
        onClick={onNextRound}
      >
        Next Round
      </Button>
    </div>
  );
};

export default GameResults;