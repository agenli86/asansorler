import type { Metadata } from 'next'
import ServiceSidebar from '@/components/ServiceSidebar'
import Accordion from '@/components/Accordion'

export const metadata: Metadata = {
  title: 'Moloz Taşıma Hizmeti | Adana Asansör Kiralama',
  description: 'Adana moloz taşıma asansörü kiralama hizmeti. İnşaat ve tadilat molozlarını mobil asansör ile hızlı ve güvenli şekilde tahliye ediyoruz. Asansörlü nakliye, kiralık asansör.',
  openGraph: {
    title: 'Moloz Taşıma Hizmeti | Adana Asansör Kiralama',
    description: 'Adana moloz taşıma asansörü kiralama hizmeti. İnşaat ve tadilat molozlarını mobil asansör ile hızlı tahliye.',
    url: 'https://adanaasansorkiralama.com/hizmetler/moloz-tasima',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama',
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com/hizmetler/moloz-tasima',
  },
}

const faqItems = [
  {
    question: 'Moloz taşıma asansörü ile ne kadar moloz taşınabilir?',
    answer: 'Asansör sistemimiz tek seferde 300-500 kg moloz taşıyabilmektedir. Günlük kapasitemiz ise projenin büyüklüğüne göre onlarca ton molozu güvenle tahliye edebilmektedir.',
  },
  {
    question: 'Moloz taşıma hizmeti hangi bölgelerde verilmektedir?',
    answer: 'Adana\'nın tüm ilçelerinde moloz taşıma hizmeti vermekteyiz. Seyhan, Yüreğir, Çukurova, Sarıçam, Kozan, Ceyhan ve diğer tüm ilçelerde hizmetinizdeyiz.',
  },
  {
    question: 'Moloz taşıma sonrası temizlik yapılıyor mu?',
    answer: 'Evet, moloz taşıma işlemi sonrasında çalışma alanının temel temizliği ekibimiz tarafından yapılmaktadır. Çevre temizliğine önem veriyoruz.',
  },
]

export default function MolozTasima() {
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
              <span className="text-secondary-400">Moloz Taşıma</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Moloz Taşıma</h1>
            <p className="text-xl text-gray-200">
              İnşaat ve tadilat sonrası molozlarınızı hızlı ve güvenli şekilde tahliye ediyoruz.
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
                  Adana Moloz Taşıma Asansörü Kiralama Hizmeti
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana asansör kiralama</strong> hizmetlerimiz kapsamında sunduğumuz moloz taşıma hizmeti, 
                  inşaat ve tadilat projelerinin vazgeçilmez bir parçasıdır. Yüksek katlı binalarda oluşan inşaat 
                  molozlarının merdiven yoluyla taşınması hem zaman alıcı hem de tehlikelidir. <strong>Asansör taşıma</strong> 
                  sistemimiz ile bu süreci hızlı, güvenli ve ekonomik hale getiriyoruz.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Kiralık asansör</strong> sistemlerimiz, özellikle daire tadilatları, bina yıkımları ve 
                  renovasyon projeleri için idealdir. Tuğla, beton, alçı, seramik kırıkları ve diğer inşaat atıkları, 
                  <strong>mobil asansör kiralama</strong> hizmetimizle kolayca zemin kata indirilebilir. Bu sayede 
                  hem işçi güvenliği sağlanır hem de proje süresi kısalır.
                </p>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Moloz Taşıma Hizmetimizin Kapsamı</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Ev taşıma asansörü</strong> olarak da kullanılan sistemlerimiz, moloz taşıma işlemlerinde 
                  de son derece etkilidir. <strong>Asansörlü nakliye</strong> yöntemiyle aşağıdaki malzemeler 
                  güvenle taşınabilir:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-600 my-6">
                  <li>Tuğla ve beton kırıkları</li>
                  <li>Alçı ve sıva döküntüleri</li>
                  <li>Seramik ve fayans kırıkları</li>
                  <li>Eski mutfak ve banyo malzemeleri</li>
                  <li>Ahşap atıklar ve eski mobilyalar</li>
                  <li>Cam ve metal atıklar</li>
                  <li>Tadilat sonrası tüm inşaat atıkları</li>
                </ul>

                <p className="text-gray-600 leading-relaxed">
                  <strong>Eşya taşıma asansörü kiralama</strong> hizmetimizde olduğu gibi, moloz taşıma işlemlerinde 
                  de profesyonel ekibimiz görev almaktadır. <strong>Nakliye asansörü</strong> operatörlerimiz, 
                  her türlü zorlu koşulda güvenli ve hızlı çalışma konusunda deneyimlidir.
                </p>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Neden Asansörle Moloz Taşıma?</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana mobil asansör</strong> ile moloz taşımanın birçok avantajı bulunmaktadır. 
                  Geleneksel yöntemlere göre çok daha hızlı olan bu sistem, aynı zamanda çevre ve bina 
                  sakinlerini de minimum düzeyde rahatsız eder:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-600 my-6">
                  <li><strong>Hız:</strong> Saatlerce sürecek iş dakikalarda tamamlanır</li>
                  <li><strong>Güvenlik:</strong> İşçi yaralanma riski minimuma iner</li>
                  <li><strong>Temizlik:</strong> Merdiven ve ortak alanlar kirletilmez</li>
                  <li><strong>Ekonomi:</strong> Daha az işçilik maliyeti</li>
                  <li><strong>Verimlilik:</strong> Proje süresi kısalır</li>
                </ul>

                <h3 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Fiyatlandırma</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  <strong>Adana asansör kiralama</strong> moloz taşıma fiyatlarımız, kat yüksekliği ve moloz 
                  miktarına göre belirlenmektedir. Ücretsiz keşif hizmetimizle projenizi yerinde değerlendiriyor, 
                  size en uygun fiyat teklifini sunuyoruz. Toplu projelerde özel indirimler uygulanmaktadır.
                </p>

                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 my-8 rounded-r-lg">
                  <h4 className="font-bold text-primary-800 mb-2">Hızlı Teklif Alın</h4>
                  <p className="text-gray-600 mb-4">
                    Moloz taşıma asansörü kiralama hizmetimiz için hemen arayın, aynı gün hizmet imkanından yararlanın.
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
              <ServiceSidebar currentService="Moloz Taşıma" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
