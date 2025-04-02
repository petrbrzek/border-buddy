"use client";

import React from 'react';
import { Country, getCountryByCode } from '../data/countries';
import { Button } from '../components/ui/button';

interface NeighborSelectorProps {
  options: string[]; // Array of country codes
  selectedOptions: string[];
  onSelect: (code: string) => void;
  isGameOver: boolean;
  correctNeighbors: string[];
}

const NeighborSelector: React.FC<NeighborSelectorProps> = ({
  options,
  selectedOptions,
  onSelect,
  isGameOver,
  correctNeighbors
}) => {
  const getButtonVariant = (code: string) => {
    if (!isGameOver) {
      return selectedOptions.includes(code) ? "secondary" : "outline";
    } else {
      if (correctNeighbors.includes(code)) {
        return selectedOptions.includes(code) ? "default" : "destructive";
      } else {
        return selectedOptions.includes(code) ? "destructive" : "outline";
      }
    }
  };

  const getButtonClass = (code: string) => {
    if (!isGameOver) {
      return selectedOptions.includes(code) 
        ? "bg-blue-500 text-white font-bold shadow-md border-2 border-blue-600 transform scale-105 hover:bg-blue-600" 
        : "";
    } else {
      if (correctNeighbors.includes(code)) {
        return selectedOptions.includes(code) ? "bg-green-500 hover:bg-green-600" : "border-green-500 text-green-500";
      } else {
        return selectedOptions.includes(code) ? "bg-red-500 hover:bg-red-600" : "";
      }
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
      {options.map(code => {
        const country = getCountryByCode(code);
        if (!country) return null;
        
        return (
          <Button
            key={code}
            variant={getButtonVariant(code) as any}
            className={`flex items-center justify-center gap-1 ${getButtonClass(code)}`}
            onClick={() => !isGameOver && onSelect(code)}
            disabled={isGameOver}
          >
            <span className="mr-1">{country.emoji}</span>
            <span className="truncate">{country.name}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default NeighborSelector;