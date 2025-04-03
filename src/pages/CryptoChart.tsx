
import React, { useState } from 'react';
import Header from '@/components/Header';
import TradingViewChart from '@/components/TradingViewChart';
import TimeIntervalSelector from '@/components/TimeIntervalSelector';
import NewsMarquee from '@/components/NewsMarquee';
import { Card } from '@/components/ui/card';

const CryptoChart = () => {
  const [symbol, setSymbol] = useState("BTC");
  const [interval, setInterval] = useState("15");

  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4">
        <Card className="w-full overflow-hidden border border-border mb-4">
          <TimeIntervalSelector 
            selectedInterval={interval} 
            onIntervalChange={handleIntervalChange} 
          />
          <TradingViewChart 
            symbol={symbol} 
            interval={interval} 
          />
        </Card>
      </main>
      <NewsMarquee />
      <footer className="bg-background border-t border-border p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bitcoin Canlı Grafik | Gerçek zamanlı veri TradingView tarafından sağlanmaktadır
      </footer>
    </div>
  );
};

export default CryptoChart;
