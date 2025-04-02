
import React from 'react';
import { Button } from '@/components/ui/button';

interface TimeIntervalSelectorProps {
  selectedInterval: string;
  onIntervalChange: (interval: string) => void;
}

const TimeIntervalSelector: React.FC<TimeIntervalSelectorProps> = ({ 
  selectedInterval, 
  onIntervalChange 
}) => {
  const intervals = [
    { label: '1m', value: '1' },
    { label: '5m', value: '5' },
    { label: '15m', value: '15' },
    { label: '1h', value: '60' },
    { label: '4h', value: '240' },
    { label: '1d', value: 'D' },
    { label: '1w', value: 'W' }
  ];

  return (
    <div className="flex flex-wrap gap-2 p-2 mb-2">
      {intervals.map((interval) => (
        <Button
          key={interval.value}
          variant={selectedInterval === interval.value ? "default" : "outline"}
          size="sm"
          onClick={() => onIntervalChange(interval.value)}
          className="min-w-[40px]"
        >
          {interval.label}
        </Button>
      ))}
    </div>
  );
};

export default TimeIntervalSelector;
