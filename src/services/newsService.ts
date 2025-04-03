
interface NewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

// CoinGecko API'den kripto haberleri çekmek için fonksiyon
export const fetchCryptoNews = async (): Promise<NewsItem[]> => {
  try {
    // CoinGecko API'den haberler çekilecek - page parametresini ekliyoruz
    const response = await fetch(
      'https://api.coingecko.com/api/v3/news?page=1'
    );
    
    if (!response.ok) {
      throw new Error('Haberler alınamadı');
    }
    
    const data = await response.json();
    
    // API yanıtı kontrol ediliyor
    if (!Array.isArray(data)) {
      console.error('Beklenmeyen API yanıt formatı:', data);
      throw new Error('API yanıt formatı beklenenden farklı');
    }
    
    // CoinGecko API yanıtını istediğimiz formata dönüştürüyoruz
    return data.map((article: any) => ({
      title: article.title,
      url: article.url,
      source: article.author,
      publishedAt: article.published_at
    }));
  } catch (error) {
    console.error('Haberler çekilirken hata oluştu:', error);
    
    // API çağrısında hata olduğunda boş dizi döndür
    // Kullanıcı gerçek veri istiyor, bu yüzden simüle edilmiş veri döndürmüyoruz
    return [];
  }
};
