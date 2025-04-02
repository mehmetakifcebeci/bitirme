
import React from 'react';
import { Bitcoin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bitcoin className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold">Bitcoin Canlı Grafik</h1>
        </div>
        <div id="price-ticker" className="text-lg font-medium">
          Yükleniyor...
        </div>
      </div>
    </header>
  );
};

export default Header;
