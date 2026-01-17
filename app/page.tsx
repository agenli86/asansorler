import type { Metadata } from 'next'
import Link from 'next/link'
import TabSection from '@/components/TabSection'

export const metadata: Metadata = {
  title: 'Adana Asansör Kiralama | Kiralık Asansör, Ev Taşıma Asansörü, Mobil Asansör',
  description: 'Adana asansör kiralama hizmeti.Eşya taşıma asansörü kiralama fiyatları 2026 Ev taşıma asansörü, mobil asansör kiralama ve asansörlü nakliye ile profesyonel taşımacılık.',
  openGraph: {
    title: 'Adana Asansör Kiralama Fiyatları | 2026 Güncel Liste',
    description: 'Adana\'da asansör kiralama fiyatlarını öğrenin. Eşya taşıma asansörü ve mobil asansör kiralama hizmetleri.',
    url: 'https://www.esyatasimaasansorukiralamafiyatlariadana.com.tr',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama Fiyatları',
  },
  alternates: {
    canonical: 'https://www.esyatasimaasansorukiralamafiyatlariadana.com.tr',
  },
}

const services = [
  {
    title: 'Mobilya Taşıma',
    description: 'Ağır ve büyük mobilyalarınızı asansör yardımıyla güvenle taşıyoruz. Merdivenden geçmeyen eşyalar için ideal çözüm.',
    href: '/hizmetler/mobilya-tasima',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Moloz Taşıma',
    description: 'İnşaat ve tadilat sonrası oluşan molozları hızlı ve güvenli şekilde tahliye ediyoruz. Temiz ve düzenli çalışma garantisi.',
    href: '/hizmetler/moloz-tasima',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: 'İnşaat Malzemesi Taşıma',
    description: 'Ağır inşaat malzemelerini yüksek katlara güvenle çıkarıyoruz. Zaman ve iş gücü tasarrufu sağlayın.',
    href: '/hizmetler/insaat-malzemesi-tasima',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    location: 'Sarıçam / Adana',
    text: 'Ev taşımamızda asansör kiralama hizmeti aldık. 8. kata kadar tüm eşyalarımız sorunsuz taşındı. Çok profesyonel ve güvenilir bir ekip.',
    rating: 5,
  },
  {
    name: 'Fatma Demir',
    location: 'Seyhan / Adana',
    text: 'Mobilyalarımız merdivenden geçmiyordu. Asansörlü taşımacılık sayesinde hiçbir çizik olmadan taşındı. Kesinlikle tavsiye ediyorum.',
    rating: 5,
  },
  {
    name: 'Mehmet Kara',
    location: 'Çukurova / Adana',
    text: 'İnşaat malzemelerini 12. kata çıkarmak zorundaydık. Mobil asansör kiralama ile işimizi saatler içinde bitirdik. Harika hizmet!',
    rating: 5,
  },
]

const blogPosts = [
  {
    title: 'Asansör Kiralama Kaçıncı Kata Kadar Çıkar?',
    excerpt: 'Mobil asansör kiralama hizmetleri ile kaçıncı kata kadar çıkabileceğinizi ve asansör kapasitelerini öğrenin.',
    slug: 'asansor-kiralama-kacinci-kata-kadar-cikar',
    readTime: '5 dk',
  },
  {
    title: 'Ev Taşıma Asansörü ile Taşınmanın Avantajları',
    excerpt: 'Ev taşıma asansörü kullanarak taşınmanın neden daha güvenli ve ekonomik olduğunu keşfedin.',
    slug: 'ev-tasima-asansoru-avantajlari',
    readTime: '4 dk',
  },
  {
    title: 'Adana\'da Kiralık Asansör Fiyatlarını Neler Belirler?',
    excerpt: 'Adana\'da asansör kiralama fiyatlarını etkileyen faktörleri ve bütçenize uygun çözümleri öğrenin.',
    slug: 'adana-kiralik-asansor-fiyatlari',
    readTime: '6 dk',
  },
]

const priceData = [
  { kat: "1 - 5 Kat Arası", fiyat: "2.500 TL" },
  { kat: "5 - 10 Kat Arası", fiyat: "3.000 TL" },
  { kat: "10 - 15 Kat Arası", fiyat: "3.000 - 5.000 TL" },
  { kat: "15 - 20 Kat Arası", fiyat: "5.000 - 10.000 TL" },
  { kat: "Saatlik Kiralama", fiyat: "2.500 TL" },
  { kat: "Günlük Kiralama", fiyat: "15.000 TL" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg hero-pattern min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary-400 text-primary-900 font-semibold rounded-full text-sm mb-6 animate-fade-in">
              7/24 Hizmetinizdeyiz
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Adana Asansör Kiralama
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Adana'da ev, ofis, inşaat ve mobilya taşımada <strong className="text-secondary-400">asansör kiralama</strong> hizmeti. 
              Güvenli ve hızlı asansörlü taşımacılık ile eşyalarınızı koruma altına alıyoruz.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Teklif Al
              </a>
            </div>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Article Section - TAM MAKALE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
              Adana Asansör Kiralama Hizmeti
            </h2>
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                <strong>Adana asansör kiralama</strong> hizmeti, modern taşımacılık sektörünün vazgeçilmez bir parçası haline gelmiştir. 
                Özellikle yüksek katlı binalarda yaşayan vatandaşlarımız için <strong>asansör taşıma</strong> çözümleri, hem zaman hem de 
                maliyet açısından büyük avantajlar sunmaktadır. Geleneksel taşıma yöntemlerinde yaşanan zorluklar, eşyaların zarar görme 
                riski ve uzun süren taşıma işlemleri, <strong>kiralık asansör</strong> kullanımıyla tamamen ortadan kalkmaktadır.
              </p>
              <p>
                <strong>Ev taşıma asansörü</strong>, özellikle dar merdivenlerden geçemeyen büyük mobilyalar ve beyaz eşyalar için 
                mükemmel bir çözüm sunar. Koltuk takımları, yatak odası mobilyaları, buzdolabı ve çamaşır makinesi gibi ağır eşyalar, 
                <strong>asansörlü nakliye</strong> sistemiyle güvenle yüksek katlara çıkarılabilmektedir. Bu sayede hem eşyalarınız 
                korunmuş olur hem de taşıma süreci çok daha kısa sürede tamamlanır.
              </p>
              <p>
                <strong>Eşya taşıma asansörü kiralama</strong> hizmeti sadece ev taşımacılığıyla sınırlı değildir. İnşaat sektöründe 
                de yaygın olarak kullanılan bu sistem, ağır malzemelerin yüksek katlara güvenle taşınmasını sağlar. Tuğla, çimento, 
                kum, seramik ve diğer inşaat malzemeleri <strong>mobil asansör</strong> yardımıyla kolayca istenen kata çıkarılabilir. 
                Bu durum, işçi güvenliğini artırırken inşaat süresini de önemli ölçüde kısaltmaktadır.
              </p>
              <p>
                Adana'nın farklı ilçelerinde hizmet veren firmamız, <strong>mobil asansör kiralama</strong> konusunda uzman kadrosuyla 
                müşterilerine en iyi hizmeti sunmayı hedeflemektedir. Seyhan, Yüreğir, Çukurova, Sarıçam ve diğer tüm ilçelerde 
                7/24 ulaşılabilir durumdayız. Modern ekipmanlarımız ve deneyimli operatörlerimiz sayesinde her türlü taşıma işlemi 
                sorunsuz bir şekilde gerçekleştirilmektedir.
              </p>
              <p>
                <strong>Nakliye asansörü</strong> kullanımının bir diğer önemli avantajı da maliyet tasarrufudur. Geleneksel yöntemlerle 
                yapılan taşımalarda birden fazla işçi gerekirken, asansörlü sistemle aynı iş çok daha az personelle tamamlanabilmektedir. 
                Ayrıca eşyaların taşıma sırasında zarar görme riski minimuma indiğinden, olası hasar masraflarından da kaçınılmış olur.
              </p>
              <p>
                <strong>Adana asansör kiralama</strong> hizmetimizle, taşınma stresini minimuma indirin. Profesyonel ekibimiz, 
                eşyalarınızın güvenliğini en üst düzeyde tutarak, hızlı ve sorunsuz bir taşıma deneyimi sunmaktadır. 
                İster ev taşıması olsun, ister ofis taşıması veya inşaat malzemesi taşıması, her türlü ihtiyacınız için 
                yanınızdayız. Hemen bizimle iletişime geçin ve ücretsiz fiyat teklifi alın.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu Bölümü */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="bg-primary-800 p-6 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Eşya Taşıma Asansörü Kiralama Fiyatları Adana 2026
              </h2>
              <p className="text-primary-100 mt-2 italic">Ekonomik ve Profesyonel Hizmet</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 text-primary-800 uppercase text-sm">
                    <th className="px-6 py-4 font-bold border-b">Hizmet Kapsamı</th>
                    <th className="px-6 py-4 font-bold border-b text-right">Güncel Fiyat</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {priceData.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-primary-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <td className="px-6 py-4 border-b font-medium">{item.kat}</td>
                      <td className="px-6 py-4 border-b text-right font-bold text-primary-700">{item.fiyat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-100 text-center text-xs text-gray-500 italic">
              * Fiyatlar 2026 yılı için geçerli olup, net teklif için lütfen iletişime geçiniz.
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <TabSection />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Müşteri Yorumları</h2>
            <p className="section-subtitle">Müşterilerimizin memnuniyeti bizim için en önemli başarı göstergesidir.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-800 block">{testimonial.name}</span>
                    <span className="text-sm text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Öne Çıkan Hizmetlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.href} className="btn-outline text-sm">
                    Detaylı İncele
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Blog Yazılarımız</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="card group">
                <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{post.readTime} okuma</div>
                  <h3 className="text-lg font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-primary-600 font-semibold">
                    Devamını Oku
                  </Link>
                </div>
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
            Hemen Ücretsiz Fiyat Teklifi Alın
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+905374092406" className="btn-secondary text-lg">
              0 (537) 409 24 06
            </a>
            <a href="https://wa.me/905374092406" target="_blank" rel="noopener noreferrer" className="btn-primary bg-green-500 hover:bg-green-600 text-lg">
              WhatsApp ile Yazın
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
