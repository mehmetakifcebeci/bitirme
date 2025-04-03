
import React, { useState } from 'react';
import Header from '@/components/Header';
import TradingViewChart from '@/components/TradingViewChart';
import TimeIntervalSelector from '@/components/TimeIntervalSelector';
import NewsMarquee from '@/components/NewsMarquee';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BrainCircuit, TrendingUp } from 'lucide-react';

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
        <div className="flex flex-col lg:flex-row gap-4">
          {/* TradingView Widget - 60% width */}
          <div className="w-full lg:w-[60%]">
            <Card className="w-full overflow-hidden border border-border h-full">
              <TimeIntervalSelector 
                selectedInterval={interval} 
                onIntervalChange={handleIntervalChange} 
              />
              <div className="h-[calc(100vh-200px)]">
                <TradingViewChart 
                  symbol={symbol} 
                  interval={interval} 
                />
              </div>
            </Card>
          </div>
          
          {/* Analysis Modules - 40% width */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4">
            {/* Technical Analysis Module */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Teknik Analiz Modülü
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-secondary/50 rounded-md flex items-center justify-center p-4 text-center">
                  <p className="text-muted-foreground">
                    Teknik analiz modülü hazırlanıyor. İleri bir tarihte entegre edilecek ve burada gösterilecektir.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* AI Analysis Module */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <BrainCircuit className="mr-2 h-5 w-5 text-primary" />
                  Yapay Zeka Modülü
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-secondary/50 rounded-md flex items-center justify-center p-4 text-center">
                  <p className="text-muted-foreground">
                    Yapay zeka modülü hazırlanıyor. İleri bir tarihte entegre edilecek ve burada analiz verileri gösterilecektir.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <NewsMarquee />
      <footer className="bg-background border-t border-border p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bitcoin Canlı Grafik | Gerçek zamanlı veri TradingView tarafından sağlanmaktadır
      </footer>
    </div>
  );
};

export default CryptoChart;
