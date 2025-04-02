"use client";

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-white/90 backdrop-blur-sm shadow-sm py-3 px-4 mb-4">
      <div className="flex items-center justify-center max-w-md mx-auto">
        <div className="flex items-center">
          <img 
            src="https://user-images-staging.langtail.com/gk81f7xnynelj927er5351fm/q2px9jxr6y8gxvzg8ktm9pa5/bvVuGA2QZtZ-cxxMLsMwq/tmpa71ryyjd.webp" 
            alt="BorderBuddy Logo" 
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