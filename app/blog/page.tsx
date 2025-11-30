import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Adana Asansör Kiralama',
  description: 'Adana asansör kiralama, ev taşıma asansörü, mobil asansör kiralama ve asansörlü nakliye hakkında faydalı bilgiler. Kiralık asansör rehberi ve taşımacılık ipuçları.',
  openGraph: {
    title: 'Blog | Adana Asansör Kiralama',
    description: 'Adana asansör kiralama ve asansörlü taşımacılık hakkında faydalı blog yazıları.',
    url: 'https://adanaasansorkiralama.com/blog',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Adana Asansör Kiralama',
  },
  alternates: {
    canonical: 'https://adanaasansorkiralama.com/blog',
  },
}

const blogPosts = [
  {
    title: 'Asansör Kiralama Kaçıncı Kata Kadar Çıkar?',
    excerpt: 'Mobil asansör kiralama hizmetleri ile kaçıncı kata kadar çıkabileceğinizi ve asansör kapasitelerini detaylı olarak inceliyoruz. Adana\'da asansör kiralama yaparken dikkat etmeniz gereken noktalar.',
    slug: 'asansor-kiralama-kacinci-kata-kadar-cikar',
    readTime: '5 dk',
    date: '15 Ocak 2025',
    category: 'Rehber',
  },
  {
    title: 'Ev Taşıma Asansörü ile Taşınmanın Avantajları',
    excerpt: 'Ev taşıma asansörü kullanarak taşınmanın neden daha güvenli, hızlı ve ekonomik olduğunu keşfedin. Asansörlü nakliye ile geleneksel taşıma yöntemleri karşılaştırması.',
    slug: 'ev-tasima-asansoru-avantajlari',
    readTime: '4 dk',
    date: '10 Ocak 2025',
    category: 'İpuçları',
  },
  {
    title: 'Adana\'da Kiralık Asansör Fiyatlarını Neler Belirler?',
    excerpt: 'Adana\'da asansör kiralama fiyatlarını etkileyen faktörleri ve bütçenize uygun çözümleri öğrenin. Mobil asansör kiralama maliyetleri hakkında her şey.',
    slug: 'adana-kiralik-asansor-fiyatlari',
    readTime: '6 dk',
    date: '5 Ocak 2025',
    category: 'Fiyatlandırma',
  },
]

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg hero-pattern py-20 relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-200">
              Asansör kiralama ve taşımacılık hakkında faydalı bilgiler, ipuçları ve rehberler.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card group hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center relative overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-secondary-400 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-400 text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime} okuma
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Devamını Oku
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Sorularınız mı Var?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Asansör kiralama hakkında merak ettiklerinizi sormak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+905374092406" className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Arayın
            </a>
            <Link href="/sss" className="btn-outline">
              SSS Sayfasına Git
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
