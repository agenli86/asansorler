import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda | Adana Asansör Kiralama',
  description: 'Adana asansör kiralama firması olarak ev taşıma asansörü, mobil asansör kiralama ve asansörlü nakliye hizmetlerinde yılların deneyimiyle yanınızdayız. Güvenilir ve profesyonel hizmet.',
  openGraph: {
    title: 'Hakkımızda | Adana Asansör Kiralama',
    description: 'Adana asansör kiralama firması olarak ev taşıma asansörü, mobil asansör kiralama ve asansörlü nakliye hizmetlerinde yılların deneyimiyle yanınızdayız.',
    url: 'https://adanaasansorkiralama.com/hakkimizda',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama',
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com/hakkimizda',
  },
}

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Güvenlik Önceliğimiz',
    description: 'Tüm ekipmanlarımız düzenli bakımdan geçirilir ve uluslararası güvenlik standartlarına uygundur.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Uzman Kadro',
    description: 'Deneyimli ve sertifikalı operatörlerimiz, her türlü taşıma işlemini profesyonelce gerçekleştirir.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '7/24 Hizmet',
    description: 'Günün her saati ulaşılabilir durumdayız. Acil taşıma ihtiyaçlarınızda yanınızdayız.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Sigortalı Taşıma',
    description: 'Tüm taşıma işlemleri sigorta kapsamındadır. Eşyalarınız güvence altındadır.',
  },
]

const stats = [
  { value: '1000+', label: 'Mutlu Müşteri' },
  { value: '15+', label: 'Yıllık Deneyim' },
  { value: '24/7', label: 'Kesintisiz Hizmet' },
  { value: '100%', label: 'Müşteri Memnuniyeti' },
]

export default function Hakkimizda() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg hero-pattern py-20 relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hakkımızda</h1>
            <p className="text-xl text-gray-200">
              Adana'da güvenilir asansör kiralama hizmeti. Yılların deneyimi ve profesyonel ekibimizle yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Adana'nın Güvenilir Asansör Kiralama Firması
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-primary-700">Adana Asansör Kiralama</strong> olarak, 15 yılı aşkın süredir 
                  Adana ve çevresinde profesyonel asansörlü taşımacılık hizmeti sunmaktayız. Ev taşıma asansörü, 
                  mobil asansör kiralama ve eşya taşıma asansörü alanlarında uzmanlaşmış ekibimizle, müşterilerimize 
                  en kaliteli hizmeti vermeyi hedefliyoruz.
                </p>
                <p>
                  Firmamız, modern ekipmanları ve deneyimli operatör kadrosuyla Adana'nın tüm ilçelerinde hizmet 
                  vermektedir. Seyhan, Yüreğir, Çukurova, Sarıçam, Kozan, Ceyhan ve diğer tüm ilçelerde asansörlü 
                  nakliye ihtiyaçlarınız için 7/24 yanınızdayız.
                </p>
                <p>
                  Güvenlik bizim için en önemli önceliktir. Tüm asansörlerimiz düzenli bakımdan geçirilmekte, 
                  uluslararası güvenlik standartlarına uygun olarak işletilmektedir. Ayrıca tüm taşıma işlemleri 
                  sigorta kapsamında gerçekleştirilmekte, eşyalarınız tam koruma altına alınmaktadır.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary-400 text-primary-900 p-6 rounded-2xl shadow-xl">
                <span className="text-4xl font-bold block">15+</span>
                <span className="font-semibold">Yıllık Deneyim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="text-4xl md:text-5xl font-bold text-primary-600 block mb-2">{stat.value}</span>
                <span className="text-gray-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="section-subtitle">
              Adana asansör kiralama sektöründe fark yaratan özelliklerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center group hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Adana ve çevresinde en güvenilir, en hızlı ve en ekonomik asansör kiralama hizmetini sunmak. 
                Müşterilerimizin taşınma sürecini stressiz ve sorunsuz hale getirmek için çalışıyoruz. 
                Her müşterimize aynı özen ve profesyonellikle yaklaşarak, sektörde fark yaratmayı hedefliyoruz.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center text-primary-900 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye genelinde asansörlü taşımacılık sektörünün lider markası olmak. Modern teknolojilerle 
                donatılmış filomuz ve sürekli gelişen ekibimizle, müşteri memnuniyetinde en yüksek standartları 
                yakalamak ve sürdürmek istiyoruz. Çevreye duyarlı ve sürdürülebilir çözümlerle sektöre yön vermeyi amaçlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg hero-pattern relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sizinle Çalışmak İstiyoruz
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Asansör kiralama ihtiyacınız için hemen bizimle iletişime geçin. Ücretsiz fiyat teklifi alın.
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
