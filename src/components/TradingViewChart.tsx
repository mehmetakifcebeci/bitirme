
import React, { useEffect, useRef } from 'react';

interface TradingViewChartProps {
  symbol: string;
  interval: string;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ symbol, interval }) => {
  const container = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Clean up previous widget if it exists
    if (container.current) {
      container.current.innerHTML = '';
    }

    // Create a new script element for the TradingView widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && container.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `${symbol}USD`,
          interval: interval,
          timezone: "Europe/Istanbul",
          theme: "dark",
          style: "1", // Candlestick chart
          locale: "tr",
          toolbar_bg: "#1e1e2d",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart",
          hide_side_toolbar: false,
          studies: ["Volume@tv-basicstudies"],
        });

        // Update the price ticker
        updatePriceTicker(symbol);
      }
    };

    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      // Clean up
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [symbol, interval]);

  const updatePriceTicker = (symbol: string) => {
    // Create a WebSocket connection to get real-time price updates
    const tickerElement = document.getElementById('price-ticker');
    
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}usdt@ticker`);
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (tickerElement) {
        const price = parseFloat(data.c).toLocaleString('tr-TR', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        
        const priceChangePercent = parseFloat(data.P);
        const colorClass = priceChangePercent >= 0 ? 'text-green-500' : 'text-red-500';
        
        tickerElement.innerHTML = `
          <span>${price}</span>
          <span class="${colorClass} ml-2">${priceChangePercent >= 0 ? '+' : ''}${priceChangePercent.toFixed(2)}%</span>
        `;
      }
    };

    return ws;
  };

  return (
    <div className="h-full w-full">
      <div 
        id="tradingview_chart" 
        ref={container} 
        className="tradingview-widget-container h-full"
      />
    </div>
  );
};

// Add the TradingView interface to the Window object
declare global {
  interface Window {
    TradingView: any;
  }
}

export default TradingViewChart;
