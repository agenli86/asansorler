import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Adana Asansör Kiralama',
  description: 'Adana asansör kiralama hizmetleri: Ev taşıma asansörü, eşya taşıma asansörü kiralama, mobil asansör kiralama, nakliye asansörü, mobilya taşıma, moloz taşıma ve inşaat malzemesi taşıma.',
  openGraph: {
    title: 'Hizmetlerimiz | Adana Asansör Kiralama',
    description: 'Adana asansör kiralama hizmetleri: Ev taşıma asansörü, mobil asansör kiralama, eşya taşıma asansörü ve nakliye asansörü.',
    url: 'https://adanaasansorkiralama.com/hizmetler',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama',
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com/hizmetler',
  },
}

const services = [
  {
    title: 'Asansör Kiralama',
    description: 'Yüksek katlı binalarda taşımacılık için profesyonel asansör kiralama hizmeti.',
    features: ['12. kata kadar hizmet', 'Deneyimli operatör', 'Sigortalı taşıma', 'Uygun fiyat'],
    href: '/hizmetler',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Eşya Taşıma Asansörü Kiralama',
    description: 'Ağır ve hacimli eşyalarınızı güvenle yüksek katlara taşıyoruz.',
    features: ['Mobilya taşıma', 'Beyaz eşya taşıma', 'Hasar garantisi', 'Hızlı kurulum'],
    href: '/hizmetler',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Mobil Asansör Kiralama',
    description: 'Taşınabilir asansör sistemleri ile her lokasyonda hizmet.',
    features: ['Kolay kurulum', 'Esnek kullanım', 'Yüksek kapasite', '7/24 hizmet'],
    href: '/hizmetler',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Nakliye Asansörü',
    description: 'Evden eve nakliyat ve ofis taşımacılığında profesyonel çözümler.',
    features: ['Evden eve taşıma', 'Ofis taşıma', 'Depo taşıma', 'Ekonomik fiyat'],
    href: '/hizmetler',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: 'Mobilya Taşıma',
    description: 'Ağır mobilyalarınızı merdivenden geçirmeden güvenle taşıyoruz.',
    features: ['Koltuk takımı', 'Yatak odası', 'Yemek odası', 'Koruyucu ambalaj'],
    href: '/hizmetler/mobilya-tasima',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Moloz Taşıma',
    description: 'İnşaat ve tadilat sonrası moloz tahliyesi hizmetimizle temizlik garantisi.',
    features: ['Hızlı tahliye', 'Temiz çalışma', 'Çevre dostu', 'Uygun fiyat'],
    href: '/hizmetler/moloz-tasima',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: 'İnşaat Malzemesi Taşıma',
    description: 'Ağır inşaat malzemelerini yüksek katlara güvenle çıkarıyoruz.',
    features: ['Tuğla, çimento', 'Seramik, fayans', 'Kum, çakıl', 'İşçi güvenliği'],
    href: '/hizmetler/insaat-malzemesi-tasima',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function Hizmetler() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg hero-pattern py-20 relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-gray-200">
              Adana'da profesyonel asansör kiralama ve taşımacılık hizmetleri. 
              Ev taşıma asansörü, mobil asansör kiralama ve daha fazlası.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Tüm Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Adana asansör kiralama alanında sunduğumuz profesyonel hizmetler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:-translate-y-2">
                <div className="p-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="btn-outline text-sm w-full justify-center">
                    Detaylı Bilgi
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
            <p className="section-subtitle">Asansör kiralama sürecimiz 4 basit adımda tamamlanır</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'İletişime Geçin', desc: 'Telefon veya WhatsApp ile bize ulaşın' },
              { step: '2', title: 'Keşif ve Teklif', desc: 'Ücretsiz keşif ve fiyat teklifi alın' },
              { step: '3', title: 'Randevu', desc: 'Size uygun tarih ve saat belirleyin' },
              { step: '4', title: 'Taşıma', desc: 'Profesyonel ekibimizle güvenli taşıma' },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-secondary-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg hero-pattern relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemen Teklif Alın
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Asansör kiralama hizmetlerimiz hakkında detaylı bilgi ve fiyat teklifi için bize ulaşın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+905374092406" className="btn-secondary text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0 (537) 409 24 06
            </a>
            <a
              href="https://wa.me/905374092406"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-green-500 hover:bg-green-600 text-lg"
            >
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
