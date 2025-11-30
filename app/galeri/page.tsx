import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galeri | Adana Asansör Kiralama',
  description: 'Adana asansör kiralama çalışmalarımızdan fotoğraflar. Ev taşıma asansörü, mobil asansör kiralama ve asansörlü nakliye projelerimiz.',
  openGraph: {
    title: 'Galeri | Adana Asansör Kiralama',
    description: 'Adana asansör kiralama çalışmalarımızdan fotoğraflar ve projelerimiz.',
    url: 'https://adanaasansorkiralama.com/galeri',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama',
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com/galeri',
  },
}

const galleryItems = [
  {
    title: 'Çukurova 10. Kat Taşımacılık',
    description: 'Ev taşıma asansörü ile mobilya taşıma',
  },
  {
    title: 'Seyhan Apartman Projesi',
    description: 'İnşaat malzemesi taşıma',
  },
  {
    title: 'Yüreğir Villa Taşıması',
    description: 'Büyük mobilya ve beyaz eşya taşıma',
  },
  {
    title: 'Sarıçam İnşaat Projesi',
    description: 'Moloz tahliyesi ve malzeme taşıma',
  },
  {
    title: 'Kozan Ev Taşıması',
    description: 'Komple ev eşyası taşıma',
  },
  {
    title: 'Ceyhan Ofis Taşıması',
    description: 'Ofis mobilyası ve ekipman taşıma',
  },
  {
    title: 'Çukurova Site Projesi',
    description: 'Toplu konut taşıma hizmeti',
  },
  {
    title: 'Seyhan Tadilat Projesi',
    description: 'Tadilat malzemesi taşıma',
  },
  {
    title: 'Yüreğir Fabrika Projesi',
    description: 'Endüstriyel ekipman taşıma',
  },
]

export default function Galeri() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg hero-pattern py-20 relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Galeri</h1>
            <p className="text-xl text-gray-200">
              Tamamladığımız projelerden görüntüler. Adana genelinde gerçekleştirdiğimiz asansör kiralama çalışmalarımız.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-secondary-400 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
                {/* Bottom Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary-900/90 p-4 group-hover:opacity-0 transition-opacity">
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Projelerimiz Hakkında</h2>
            <p className="text-gray-600 mb-8">
              Adana ve çevresinde binlerce başarılı taşıma projesi gerçekleştirdik. Her projede müşteri memnuniyeti 
              ve eşya güvenliği önceliğimiz oldu. Ev taşıma asansörü, mobil asansör kiralama ve inşaat malzemesi 
              taşıma hizmetlerimizle Adana'nın her köşesinde hizmet verdik.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary-600 block">1000+</span>
                <span className="text-gray-600">Proje</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-primary-600 block">15+</span>
                <span className="text-gray-600">Yıl Deneyim</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-primary-600 block">100%</span>
                <span className="text-gray-600">Memnuniyet</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-primary-600 block">15</span>
                <span className="text-gray-600">İlçe Kapsama</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg hero-pattern relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sıradaki Proje Sizin Olsun
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Profesyonel asansör kiralama hizmeti için hemen bizi arayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+905374092406" className="btn-secondary text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara
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
