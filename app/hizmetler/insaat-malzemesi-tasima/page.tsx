import type { Metadata } from 'next'
import ServiceSidebar from '@/components/ServiceSidebar'
import Accordion from '@/components/Accordion'

export const metadata: Metadata = {
  title: 'İnşaat Malzemesi Taşıma | Adana Asansör Kiralama',
  description: 'Adana inşaat malzemesi taşıma asansörü kiralama. Tuğla, çimento, seramik ve ağır malzemeleri mobil asansör ile yüksek katlara güvenle çıkarıyoruz. Asansörlü nakliye hizmeti.',
  openGraph: {
    title: 'İnşaat Malzemesi Taşıma | Adana Asansör Kiralama',
    description: 'Adana inşaat malzemesi taşıma asansörü kiralama. Ağır malzemeleri mobil asansör ile yüksek katlara çıkarıyoruz.',
    url: 'https://adanaasansorkiralama.com/hizmetler/insaat-malzemesi-tasima',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama',
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com/hizmetler/insaat-malzemesi-tasima',
  },
}

const faqItems = [
  {
    question: 'Hangi inşaat malzemeleri asansörle taşınabilir?',
    answer: 'Tuğla, çimento, kum, çakıl, seramik, fayans, alçı, boya, izolasyon malzemeleri ve daha birçok inşaat malzemesi asansörümüzle güvenle taşınabilir. Tek seferde 500 kg\'a kadar yük kapasitemiz mevcuttur.',
  },
  {
    question: 'İnşaat malzemesi taşıma için minimum sipariş var mı?',
    answer: 'Minimum sipariş miktarımız bulunmamaktadır. Küçük tadilatlardan büyük inşaat projelerine kadar her ölçekte hizmet vermekteyiz.',
  },
  {
    question: 'Malzeme taşıma için önceden randevu gerekli mi?',
    answer: 'Önceden randevu almanız hizmet kalitemiz açısından önerilir. Ancak uygunluk durumuna göre aynı gün hizmet de verebilmekteyiz. Acil durumlar için 7/24 ulaşılabilir durumdayız.',
  },
]

export default function InsaatMalzemesiTasima() {
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
              <span className="text-secondary-400">İnşaat Malzemesi Taşıma</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">İnşaat Malzemesi Taşıma</h1>
            <p className="text-xl text-gray-200">
              Ağır inşaat malzemelerini yüksek katlara güvenle ve hızlı şekilde çıkarıyoruz.
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
                  Adana İnşaat Malzemesi Taşıma Asansörü Kiralama
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana asansör kiralama</strong> hizmetlerimizin en önemli kullanım alanlarından biri 
                  inşaat malzemesi taşımadır. Yüksek katlı binalarda gerçekleştirilen inşaat ve tadilat 
                  projelerinde, ağır malzemelerin üst katlara çıkarılması ciddi bir zorluk oluşturur. 
                  <strong>Asansör taşıma</strong> sistemimiz bu sorunu tamamen ortadan kaldırmaktadır.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Kiralık asansör</strong> hizmetimiz sayesinde tuğla, çimento, kum, seramik ve 
                  diğer ağır inşaat malzemeleri dakikalar içinde istenen kata çıkarılabilir. Bu hem 
                  zaman tasarrufu sağlar hem de işçi güvenliğini artırır. <strong>Ev taşıma asansörü</strong> 
                  olarak da kullanılan sistemlerimiz, inşaat sektörünün ihtiyaçlarına mükemmel şekilde 
                  cevap vermektedir.
                </p>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Taşıyabildiğimiz Malzemeler</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Mobil asansör kiralama</strong> hizmetimizle aşağıdaki inşaat malzemelerini 
                  güvenle taşıyabilirsiniz:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-600 my-6">
                  <li>Tuğla ve briket</li>
                  <li>Çimento ve hazır harç</li>
                  <li>Kum, çakıl ve mıcır</li>
                  <li>Seramik ve fayans</li>
                  <li>Alçı ve alçıpan levhalar</li>
                  <li>İzolasyon malzemeleri</li>
                  <li>Boya ve badana malzemeleri</li>
                  <li>Demir ve profil</li>
                  <li>PVC ve tesisat malzemeleri</li>
                  <li>Kapı ve pencere doğramaları</li>
                </ul>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">İnşaat Firmalarına Özel Çözümler</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Asansörlü nakliye</strong> hizmetimiz, özellikle inşaat firmaları ve müteahhitler 
                  için büyük avantajlar sunmaktadır. <strong>Eşya taşıma asansörü kiralama</strong> deneyimimizi 
                  inşaat sektörüne de taşıyarak, projelerin zamanında ve güvenli şekilde tamamlanmasına 
                  katkı sağlıyoruz.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Nakliye asansörü</strong> sistemimizin inşaat projelerindeki avantajları:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-600 my-6">
                  <li><strong>Zaman Tasarrufu:</strong> Günlerce sürecek malzeme taşıma işi saatlere iner</li>
                  <li><strong>İşçi Güvenliği:</strong> Ağır yük taşıma kaynaklı yaralanmalar önlenir</li>
                  <li><strong>Maliyet Avantajı:</strong> Daha az işçi ile daha çok iş yapılır</li>
                  <li><strong>Proje Hızı:</strong> İnşaat süresi önemli ölçüde kısalır</li>
                  <li><strong>Malzeme Güvenliği:</strong> Kırılma ve hasar riski minimuma iner</li>
                </ul>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Fiyatlandırma ve Süreç</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana asansör kiralama</strong> inşaat malzemesi taşıma fiyatlarımız, projenin 
                  kapsamına göre belirlenmektedir. Faktörler arasında kat yüksekliği, malzeme miktarı, 
                  çalışma süresi ve lokasyon yer almaktadır. Büyük projeler ve düzenli müşterilerimiz 
                  için özel fiyatlandırma seçenekleri sunmaktayız.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana mobil asansör</strong> ekibimiz, her türlü bina yapısına uyum sağlayacak 
                  kurulum yapabilmektedir. Dış cephe, balkon veya pencere üzerinden güvenli kurulum 
                  gerçekleştirilir. Deneyimli operatörlerimiz, zorlu koşullarda bile verimli çalışma 
                  kapasitesine sahiptir.
                </p>

                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 my-8 rounded-r-lg">
                  <h4 className="font-bold text-primary-800 mb-2">İnşaat Projeniz İçin Teklif Alın</h4>
                  <p className="text-gray-600 mb-4">
                    İnşaat malzemesi taşıma asansörü kiralama hizmeti için hemen bizi arayın. 
                    Ücretsiz keşif ve proje bazlı özel fiyatlandırma imkanı sunuyoruz.
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
              <ServiceSidebar currentService="İnşaat Malzemesi Taşıma" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
