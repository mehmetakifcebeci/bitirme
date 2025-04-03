
interface NewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

// CoinGecko API'den kripto haberleri çekmek için fonksiyon
export const fetchCryptoNews = async (): Promise<NewsItem[]> => {
  try {
    // CoinGecko API'den haberler çekilecek
    const response = await fetch(
      'https://api.coingecko.com/api/v3/news'
    );
    
    if (!response.ok) {
      throw new Error('Haberler alınamadı');
    }
    
    const data = await response.json();
    
    // CoinGecko API yanıtını istediğimiz formata dönüştürüyoruz
    return data.map((article: any) => ({
      title: article.title,
      url: article.url,
      source: article.author,
      publishedAt: article.published_at
    }));
  } catch (error) {
    console.error('Haberler çekilirken hata oluştu:', error);
    
    // Hata durumunda daha uzun örnek veriler döndürelim
    return [
      {
        title: "Bitcoin 60.000 doları aşarak yeni bir rekor kırdı. Analistler bu yükselişin kurumsal yatırımcıların artan ilgisinden kaynaklandığını belirtiyor.",
        url: "https://www.example.com/news/1",
        source: "Kripto Haber",
        publishedAt: new Date().toISOString()
      },
      {
        title: "Ethereum yeni bir rekora doğru ilerliyor. ETH 2.0 güncellemesinin yaklaşması ve NFT pazarının büyümesi fiyatı olumlu etkiliyor. Teknik analistler 4000$ seviyesinin test edilebileceğini öngörüyor.",
        url: "https://www.example.com/news/2",
        source: "Blockchain Günlüğü",
        publishedAt: new Date().toISOString()
      },
      {
        title: "Kripto düzenlemeleri hakkında yeni gelişmeler yaşanıyor. Merkez Bankası kripto varlıklara ilişkin yeni bir düzenleme çerçevesi hazırladığını duyurdu. Sektör temsilcileri düzenlemelerin içeriğini merakla bekliyor.",
        url: "https://www.example.com/news/3",
        source: "Finans Portalı",
        publishedAt: new Date().toISOString()
      },
      {
        title: "Altcoin piyasasında büyük hareketlilik yaşanıyor. Son 24 saatte birçok altcoin %20'nin üzerinde değer kazandı. Uzmanlar bu rallinin sürdürülebilir olup olmadığı konusunda fikir ayrılığı yaşıyor.",
        url: "https://www.example.com/news/4",
        source: "Kripto Para Analiz",
        publishedAt: new Date().toISOString()
      },
      {
        title: "NFT pazarında yeni trendler oluşuyor ve büyük markalar bu alana yatırım yapmaya devam ediyor. Geçtiğimiz hafta dünyaca ünlü bir moda markası kendi NFT koleksiyonunu piyasaya süreceğini duyurdu.",
        url: "https://www.example.com/news/5",
        source: "Dijital Varlık Haberleri",
        publishedAt: new Date().toISOString()
      },
      {
        title: "DeFi protokollerinin toplam kilitli değeri (TVL) 100 milyar doları aştı. Uzmanlar merkeziyetsiz finans ekosisteminin geleneksel finans dünyasına olan etkisinin giderek artacağını öngörüyor.",
        url: "https://www.example.com/news/6",
        source: "DeFi Günlüğü",
        publishedAt: new Date().toISOString()
      },
      {
        title: "Bitcoin madenciliğinde çevreci çözümler ön plana çıkıyor. Büyük madencilik şirketleri yenilenebilir enerji kaynaklarına yönelerek karbon ayak izlerini azaltmayı hedefliyor.",
        url: "https://www.example.com/news/7",
        source: "Kripto Ekoloji",
        publishedAt: new Date().toISOString()
      }
    ];
  }
};
