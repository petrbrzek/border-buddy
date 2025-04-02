"use client";

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-white/90 backdrop-blur-sm shadow-sm py-3 px-4 mb-4">
      <div className="flex items-center justify-center max-w-md mx-auto">
        <div className="flex items-center">
          <img 
            src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/tnq3a634ahlm397oaafuvj2c/Wzy8A5MNH9YBx0zAUDvAe/map.png" 
            alt="BorderBuddy Map Logo" 
            className="w-12 h-12 mr-3"
          />
          <div>
            <h1 className="text-xl font-bold text-primary">BorderBuddy</h1>
            <p className="text-xs text-muted-foreground">Guess the neighboring countries of Europe!</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;