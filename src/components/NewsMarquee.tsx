
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCryptoNews } from '@/services/newsService';
import { ExternalLink } from 'lucide-react';

const NewsMarquee: React.FC = () => {
  const { data: newsItems = [], isLoading, error } = useQuery({
    queryKey: ['cryptoNews'],
    queryFn: fetchCryptoNews,
    refetchInterval: 5 * 60 * 1000, // 5 dakikada bir yenile
  });

  if (isLoading) {
    return (
      <div className="w-full bg-secondary text-secondary-foreground py-2 overflow-hidden border-t border-border">
        <div className="animate-pulse flex space-x-4 px-4">
          <div className="flex-1 h-4 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-secondary text-secondary-foreground py-2 overflow-hidden border-t border-border">
        <div className="container mx-auto">
          <p className="text-destructive">Haberler yüklenirken bir sorun oluştu.</p>
        </div>
      </div>
    );
  }

  // Haberleri birleştir ve yeterince uzun bir döngü oluştur
  const marqueeItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="w-full bg-secondary text-secondary-foreground py-2 overflow-hidden border-t border-border">
      <div className="marquee-container relative">
        <div className="marquee flex items-center animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mx-6 hover:text-primary transition-colors"
            >
              <span className="font-semibold mr-2">{item.source}:</span>
              <span>{item.title}</span>
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
