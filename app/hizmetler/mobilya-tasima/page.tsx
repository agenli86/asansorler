import type { Metadata } from 'next'
import ServiceSidebar from '@/components/ServiceSidebar'
import Accordion from '@/components/Accordion'

export const metadata: Metadata = {
  title: 'Mobilya Taşıma Hizmeti | Adana Asansör Kiralama',
  description: 'Adana mobilya taşıma asansörü kiralama hizmeti. Ağır mobilyalarınızı ev taşıma asansörü ile güvenle taşıyoruz. Kiralık asansör ile asansörlü nakliye, mobil asansör kiralama.',
  openGraph: {
    title: 'Mobilya Taşıma Hizmeti | Adana Asansör Kiralama',
    description: 'Adana mobilya taşıma asansörü kiralama hizmeti. Ağır mobilyalarınızı ev taşıma asansörü ile güvenle taşıyoruz.',
    url: 'https://adanaasansorkiralama.com/hizmetler/mobilya-tasima',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama',
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com/hizmetler/mobilya-tasima',
  },
}

const faqItems = [
  {
    question: 'Mobilya taşıma asansörü hangi tür mobilyaları taşıyabilir?',
    answer: 'Mobilya taşıma asansörümüz; koltuk takımları, yatak odası mobilyaları, yemek odası takımları, gardıroplar, kitaplıklar ve tüm büyük ev eşyalarını güvenle taşıyabilir. Özellikle merdivenden geçemeyen L koltuklar ve büyük gardıroplar için ideal çözümdür.',
  },
  {
    question: 'Mobilya taşıma fiyatları nasıl belirlenir?',
    answer: 'Fiyatlandırma; kat yüksekliği, taşınacak eşya miktarı, lokasyon ve hizmet süresi gibi faktörlere göre belirlenir. Ücretsiz keşif yaparak size en uygun fiyat teklifini sunuyoruz.',
  },
  {
    question: 'Mobilya taşıma sırasında eşyalarım hasar görür mü?',
    answer: 'Tüm mobilyalarınız profesyonel koruyucu malzemelerle sarılarak taşınır. Ayrıca tüm taşıma işlemleri sigorta kapsamındadır, bu sayede eşyalarınız tam güvence altındadır.',
  },
]

export default function MobilyaTasima() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg hero-pattern py-16 relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-300 mb-4">
              <a href="/" className="hover:text-white">Anasayfa</a>
              <span className="mx-2">/</span>
              <a href="/hizmetler" className="hover:text-white">Hizmetler</a>
              <span className="mx-2">/</span>
              <span className="text-secondary-400">Mobilya Taşıma</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mobilya Taşıma</h1>
            <p className="text-xl text-gray-200">
              Adana'da ağır ve büyük mobilyalarınızı asansör yardımıyla güvenle taşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-primary-800 mb-6">
                  Adana Mobilya Taşıma Asansörü Kiralama Hizmeti
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana asansör kiralama</strong> hizmetlerimiz arasında en çok tercih edilen seçeneklerden biri 
                  mobilya taşıma asansörüdür. Özellikle yüksek katlı binalarda yaşayan vatandaşlarımız için 
                  <strong>asansör taşıma</strong> çözümleri vazgeçilmez hale gelmiştir. Büyük ve ağır mobilyaların 
                  dar merdivenlerden geçirilmesi hem zor hem de risklidir. İşte bu noktada <strong>kiralık asansör</strong> 
                  sistemlerimiz devreye girmektedir.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Ev taşıma asansörü</strong> ile mobilyalarınızı taşımak, geleneksel yöntemlere göre çok daha 
                  güvenli ve hızlıdır. L koltuk takımları, chester koltuklar, büyük gardıroplar ve yatak odası 
                  mobilyaları gibi hacimli eşyalar, <strong>asansörlü nakliye</strong> sistemiyle kolayca yüksek katlara 
                  çıkarılabilir. Bu sayede eşyalarınız çizilmeden, kırılmadan ve zarar görmeden yeni adresinize ulaşır.
                </p>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Mobilya Taşıma Hizmetimizin Avantajları</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Eşya taşıma asansörü kiralama</strong> hizmetimiz, Adana'nın tüm ilçelerinde geçerlidir. 
                  Seyhan, Yüreğir, Çukurova, Sarıçam ve diğer ilçelerde <strong>mobil asansör kiralama</strong> 
                  çözümlerimizle hizmet vermekteyiz. Modern asansör sistemlerimiz 12. kata kadar hizmet verebilmekte, 
                  500 kg'a kadar yük kapasitesine sahip bulunmaktadır.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-600 my-6">
                  <li>Profesyonel ve deneyimli operatör ekibi</li>
                  <li>Sigortalı taşıma garantisi</li>
                  <li>Koruyucu ambalaj malzemeleri</li>
                  <li>12. kata kadar hizmet imkanı</li>
                  <li>500 kg taşıma kapasitesi</li>
                  <li>Hızlı kurulum ve söküm</li>
                  <li>7/24 hizmet desteği</li>
                </ul>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Nakliye asansörü</strong> kullanımı, mobilya taşıma sürecini önemli ölçüde kısaltır. 
                  Geleneksel yöntemlerle saatler sürecek bir taşıma işlemi, asansör sistemiyle dakikalar içinde 
                  tamamlanabilir. Ayrıca işçilik maliyetlerinden de tasarruf sağlanır çünkü daha az personel ile 
                  aynı iş tamamlanabilir.
                </p>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Fiyatlandırma ve Süreç</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana asansör kiralama</strong> fiyatlarımız, taşınacak kat sayısı, eşya miktarı ve 
                  lokasyona göre değişkenlik gösterir. Ücretsiz keşif hizmetimizle birlikte size en uygun fiyat 
                  teklifini sunuyoruz. Mobilya taşıma asansörü kiralama sürecimiz şu adımlardan oluşur:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 my-6">
                  <li>Telefon veya WhatsApp ile iletişime geçilir</li>
                  <li>Ücretsiz keşif yapılır ve fiyat teklifi verilir</li>
                  <li>Randevu tarihi ve saati belirlenir</li>
                  <li>Asansör kurulumu yapılır (15-30 dakika)</li>
                  <li>Mobilyalar güvenle taşınır</li>
                  <li>Asansör sökülür ve alan temizlenir</li>
                </ol>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Mobil asansör</strong> sistemlerimiz, her türlü bina yapısına uyum sağlayacak şekilde 
                  tasarlanmıştır. Balkon, pencere veya dış cephe kullanılarak kurulum yapılabilir. Deneyimli 
                  ekibimiz, kurulum öncesinde binanın yapısını inceleyerek en uygun çözümü belirler.
                </p>

                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 my-8 rounded-r-lg">
                  <h4 className="font-bold text-primary-800 mb-2">Ücretsiz Keşif ve Fiyat Teklifi</h4>
                  <p className="text-gray-600 mb-4">
                    Mobilya taşıma asansörü kiralama hizmetimiz hakkında detaylı bilgi almak ve ücretsiz fiyat 
                    teklifi için hemen bizi arayın.
                  </p>
                  <a href="tel:+905374092406" className="btn-primary inline-flex">
                    0 (537) 409 24 06
                  </a>
                </div>

                {/* FAQ Section */}
                <h3 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Sıkça Sorulan Sorular</h3>
                <Accordion items={faqItems} />
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ServiceSidebar currentService="Mobilya Taşıma" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
