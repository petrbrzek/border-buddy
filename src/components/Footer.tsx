"use client";

import React from 'react';
import MacalyBadge from './MacalyBadge';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-3 px-4 mt-4">
      <div className="flex justify-center max-w-md mx-auto">
        <MacalyBadge />
      </div>
    </footer>
  );
};

export default Footer;