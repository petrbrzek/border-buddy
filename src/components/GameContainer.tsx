"use client";

import React, { useState, useEffect } from 'react';
import { Country, getRandomCountry, getAllCountryCodes, getCountryByCode } from '../data/countries';
import CountryDisplay from './CountryDisplay';
import NeighborSelector from './NeighborSelector';
import GameResults from './GameResults';
import { Button } from '../components/ui/button';

const GameContainer: React.FC = () => {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [roundsPlayed, setRoundsPlayed] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Initialize the game
  const startGame = () => {
    setGameStarted(true);
    startNewRound();
  };

  // Start a new round
  const startNewRound = () => {
    const newCountry = getRandomCountry();
    setCurrentCountry(newCountry);
    
    // Create options (neighbors + some non-neighbors)
    const allCodes = getAllCountryCodes();
    const nonNeighbors = allCodes.filter(code => 
      code !== newCountry.code && !newCountry.neighbors.includes(code)
    );
    
    // Randomly select some non-neighbors
    const shuffledNonNeighbors = [...nonNeighbors].sort(() => 0.5 - Math.random());
    const selectedNonNeighbors = shuffledNonNeighbors.slice(0, Math.min(10 - newCountry.neighbors.length, nonNeighbors.length));
    
    // Combine neighbors and non-neighbors, then shuffle
    const combinedOptions = [...newCountry.neighbors, ...selectedNonNeighbors];
    setOptions(combinedOptions.sort(() => 0.5 - Math.random()));
    
    // Reset game state
    setSelectedOptions([]);
    setIsGameOver(false);
    setScore(0);
    setRoundsPlayed(prev => prev + 1);
  };

  // Handle option selection
  const handleSelect = (code: string) => {
    if (selectedOptions.includes(code)) {
      setSelectedOptions(prev => prev.filter(c => c !== code));
    } else {
      setSelectedOptions(prev => [...prev, code]);
    }
  };

  // Check answers and end the round
  const checkAnswers = () => {
    if (!currentCountry) return;
    
    let roundScore = 0;
    const correctNeighbors = currentCountry.neighbors;
    
    // Calculate score: +10 for each correct neighbor, -5 for each incorrect selection
    selectedOptions.forEach(code => {
      if (correctNeighbors.includes(code)) {
        roundScore += 10;
      } else {
        roundScore -= 5;
      }
    });
    
    // Ensure score doesn't go below 0
    roundScore = Math.max(0, roundScore);
    
    setScore(roundScore);
    setTotalScore(prev => prev + roundScore);
    setIsGameOver(true);
  };

  // Get missed neighbors
  const getMissedNeighbors = (): string[] => {
    if (!currentCountry) return [];
    return currentCountry.neighbors.filter(code => !selectedOptions.includes(code));
  };

  // Calculate total correct selections
  const getTotalCorrect = (): number => {
    if (!currentCountry) return 0;
    return selectedOptions.filter(code => currentCountry.neighbors.includes(code)).length;
  };

  // If no current country is set, initialize the game
  useEffect(() => {
    if (!gameStarted) return;
    if (!currentCountry) {
      startNewRound();
    }
  }, [currentCountry, gameStarted]);

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">European Neighbors</h1>
        <p className="mb-6 text-muted-foreground">
          Test your knowledge of European geography! Select all countries that share a border with the target country.
        </p>
        <Button size="lg" onClick={startGame}>Start Game</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4">
      {currentCountry && (
        <>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Round: {roundsPlayed}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Score: {totalScore}</p>
            </div>
          </div>
          
          <CountryDisplay country={currentCountry} />
          
          <NeighborSelector 
            options={options}
            selectedOptions={selectedOptions}
            onSelect={handleSelect}
            isGameOver={isGameOver}
            correctNeighbors={currentCountry.neighbors}
          />
          
          {!isGameOver ? (
            <Button 
              className="mt-6 w-full" 
              onClick={checkAnswers}
              disabled={selectedOptions.length === 0}
            >
              Check Answers
            </Button>
          ) : (
            <GameResults 
              score={score}
              totalCorrect={getTotalCorrect()}
              totalNeighbors={currentCountry.neighbors.length}
              missedNeighbors={getMissedNeighbors()}
              onNextRound={startNewRound}
            />
          )}
        </>
      )}
    </div>
  );
};

export default GameContainer;