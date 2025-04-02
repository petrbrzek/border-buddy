"use client";

import React from 'react';
import { Country } from '../data/countries';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

interface CountryDisplayProps {
  country: Country;
}

const CountryDisplay: React.FC<CountryDisplayProps> = ({ country }) => {
  return (
    <Card className="w-full bg-card shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-2xl flex items-center justify-center gap-2">
          <span className="text-4xl">{country.emoji}</span>
          <span>{country.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">
          Select all countries that share a border with {country.name}
        </p>
      </CardContent>
    </Card>
  );
};

export default CountryDisplay;