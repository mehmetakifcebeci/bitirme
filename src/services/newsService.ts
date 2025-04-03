
interface NewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

// News API'den kripto haberleri çekmek için fonksiyon
export const fetchCryptoNews = async (): Promise<NewsItem[]> => {
  try {
    // News API'ye istek atarken CORS sorunlarını önlemek için 
    // ücretsiz bir proxy kullanıyoruz (gnews API alternatif olarak kullanılabilir)
    const response = await fetch(
      'https://gnews.io/api/v4/search?q=cryptocurrency+bitcoin&lang=tr&country=tr&max=10&apikey=511c743fa75a95f0d1d82597110e2306'
    );
    
    if (!response.ok) {
      throw new Error('Haberler alınamadı');
    }
    
    const data = await response.json();
    
    // GNews API yanıt formatı farklı olduğu için dönüştürüyoruz
    return data.articles.map((article: any) => ({
      title: article.title,
      url: article.url,
      source: article.source.name,
      publishedAt: article.publishedAt
    }));
  } catch (error) {
    console.error('Haberler çekilirken hata oluştu:', error);
    
    // Hata durumunda örnek veriler döndürelim
    return [
      {
        title: "Bitcoin 60.000 doları aştı",
        url: "https://www.example.com/news/1",
        source: "Kripto Haber",
        publishedAt: new Date().toISOString()
      },
      {
        title: "Ethereum yeni bir rekora doğru ilerliyor",
        url: "https://www.example.com/news/2",
        source: "Blockchain Günlüğü",
        publishedAt: new Date().toISOString()
      },
      {
        title: "Kripto düzenlemeleri hakkında yeni gelişmeler",
        url: "https://www.example.com/news/3",
        source: "Finans Portalı",
        publishedAt: new Date().toISOString()
      },
      {
        title: "Altcoin piyasasında büyük hareketlilik",
        url: "https://www.example.com/news/4",
        source: "Kripto Para Analiz",
        publishedAt: new Date().toISOString()
      },
      {
        title: "NFT pazarında yeni trendler oluşuyor",
        url: "https://www.example.com/news/5",
        source: "Dijital Varlık Haberleri",
        publishedAt: new Date().toISOString()
      }
    ];
  }
};
