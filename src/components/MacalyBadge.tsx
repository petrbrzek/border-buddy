"use client";

import React from 'react';
import { Logo } from '../Logo';

const MacalyBadge: React.FC = () => {
  return (
    <a 
      href="https://macaly.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
    >
      <span>Made in</span>
      <Logo className="h-4 w-auto" />
    </a>
  );
};

export default MacalyBadge;