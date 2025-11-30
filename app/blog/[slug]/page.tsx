import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BlogSidebar from '@/components/BlogSidebar'

interface BlogPost {
  title: string
  description: string
  content: string
  date: string
  readTime: string
  category: string
}

const blogPosts: Record<string, BlogPost> = {
  'asansor-kiralama-kacinci-kata-kadar-cikar': {
    title: 'Asansör Kiralama Kaçıncı Kata Kadar Çıkar?',
    description: 'Mobil asansör kiralama hizmetleri ile kaçıncı kata kadar çıkabileceğinizi ve asansör kapasitelerini detaylı olarak inceliyoruz.',
    date: '15 Ocak 2025',
    readTime: '5 dk',
    category: 'Rehber',
    content: `
      <p>Asansör kiralama kaçıncı kata kadar çıkar sorusu, taşınma planlayan herkesin merak ettiği konulardan biridir. <strong>Adana asansör kiralama</strong> hizmetlerimizde kullandığımız modern mobil asansör sistemleri, genellikle 12-15. kata kadar güvenli bir şekilde hizmet verebilmektedir. Ancak bu rakam, kullanılan ekipmanın özelliklerine ve binanın yapısına göre değişiklik gösterebilir.</p>
      
      <h3>Mobil Asansör Sistemlerinin Kapasiteleri</h3>
      
      <p><strong>Kiralık asansör</strong> sistemleri, farklı yüksekliklerde hizmet verebilen çeşitli modellere sahiptir. <strong>Ev taşıma asansörü</strong> olarak kullanılan standart modeller genellikle 25-30 metre yüksekliğe ulaşabilir, bu da yaklaşık 8-10 kata denk gelmektedir. Daha profesyonel ve büyük kapasiteli <strong>asansörlü nakliye</strong> sistemleri ise 40-45 metre yüksekliğe çıkabilir, bu da 12-15 kat anlamına gelir.</p>
      
      <p><strong>Eşya taşıma asansörü kiralama</strong> hizmetinde kullanılan asansörlerin yük kapasiteleri de önemli bir faktördür. Standart sistemler 200-300 kg arası yük taşıyabilirken, profesyonel <strong>mobil asansör kiralama</strong> sistemleri 500 kg'a kadar yük kapasitesine sahiptir.</p>
      
      <h3>Kat Yüksekliğini Etkileyen Faktörler</h3>
      
      <p><strong>Asansör taşıma</strong> işlemlerinde maksimum kat yüksekliği aşağıdaki faktörlerden etkilenir:</p>
      
      <ul>
        <li><strong>Asansör modeli:</strong> Farklı marka ve modeller farklı yüksekliklere ulaşabilir</li>
        <li><strong>Bina yapısı:</strong> Çıkıntılar, balkonlar ve engeller erişimi etkileyebilir</li>
        <li><strong>Zemin durumu:</strong> Asansörün kurulacağı zeminin düz ve sağlam olması gerekir</li>
        <li><strong>Hava koşulları:</strong> Rüzgarlı havalarda yüksek katlarda çalışma güvenlik nedeniyle sınırlanabilir</li>
        <li><strong>Elektrik altyapısı:</strong> Asansörün çalışması için yeterli elektrik kaynağı gereklidir</li>
      </ul>
      
      <h3>Adana'da Asansör Kiralama Kat Kapasiteleri</h3>
      
      <p><strong>Adana asansör kiralama</strong> hizmetlerimizde kullandığımız ekipmanlar, şehirdeki binaların çoğunluğuna hizmet verebilecek kapasitededir. Adana'da yaygın olan 10-12 katlı apartmanlar için <strong>nakliye asansörü</strong> sistemlerimiz idealdir. Daha yüksek binalarda ise özel ekipman ve ek önlemler gerekebilir.</p>
      
      <p><strong>Mobil asansör</strong> sistemlerimiz Seyhan, Yüreğir, Çukurova, Sarıçam ve diğer tüm ilçelerde sorunsuz çalışmaktadır. Her lokasyonda önce keşif yapılarak binanın yapısı ve erişim koşulları değerlendirilir.</p>
      
      <h3>Yüksek Katlarda Taşıma İçin Öneriler</h3>
      
      <p><strong>Adana mobil asansör</strong> hizmetimizden en iyi şekilde yararlanmak için:</p>
      
      <ul>
        <li>Önceden keşif randevusu alın</li>
        <li>Binanın kat yüksekliğini ve yapısını bildirin</li>
        <li>Balkon veya pencere ölçülerini paylaşın</li>
        <li>Taşınacak eşyaların listesini hazırlayın</li>
        <li>Bina yönetiminden gerekli izinleri alın</li>
      </ul>
      
      <p>Sonuç olarak, <strong>asansör kiralama kaçıncı kata kadar çıkar</strong> sorusunun cevabı genellikle 12-15 kat olmakla birlikte, her proje için özel değerlendirme yapılması gerekmektedir. Profesyonel ekibimiz, sizin için en uygun çözümü belirleyecektir.</p>
    `,
  },
  'ev-tasima-asansoru-avantajlari': {
    title: 'Ev Taşıma Asansörü ile Taşınmanın Avantajları',
    description: 'Ev taşıma asansörü kullanarak taşınmanın neden daha güvenli, hızlı ve ekonomik olduğunu keşfedin.',
    date: '10 Ocak 2025',
    readTime: '4 dk',
    category: 'İpuçları',
    content: `
      <p><strong>Ev taşıma asansörü</strong>, modern taşımacılığın vazgeçilmez araçlarından biri haline gelmiştir. Özellikle yüksek katlı binalarda yaşayanlar için <strong>asansörlü nakliye</strong> yöntemi, geleneksel taşıma yöntemlerine göre sayısız avantaj sunmaktadır. Bu yazımızda <strong>Adana asansör kiralama</strong> hizmetinin neden bu kadar popüler olduğunu inceliyoruz.</p>
      
      <h3>1. Eşya Güvenliği</h3>
      
      <p><strong>Asansör taşıma</strong> yönteminin en büyük avantajı eşya güvenliğidir. Geleneksel yöntemlerle taşınan mobilyalar, dar merdivenlerde sıkışabilir, çizilebilir veya kırılabilir. <strong>Kiralık asansör</strong> ile taşımada ise eşyalar doğrudan pencere veya balkondan alınarak güvenle taşınır.</p>
      
      <p><strong>Eşya taşıma asansörü kiralama</strong> hizmetinde özellikle şu eşyalar için büyük kolaylık sağlanır:</p>
      
      <ul>
        <li>L koltuk takımları ve chester koltuklar</li>
        <li>Büyük gardıroplar ve vestiyer</li>
        <li>Yatak başlıkları ve bazalar</li>
        <li>Buzdolabı ve çamaşır makinesi gibi beyaz eşyalar</li>
        <li>Piyano ve müzik aletleri</li>
      </ul>
      
      <h3>2. Zaman Tasarrufu</h3>
      
      <p><strong>Mobil asansör kiralama</strong> ile taşıma süresi önemli ölçüde kısalır. Merdivenden taşıma ile saatler sürecek bir iş, <strong>nakliye asansörü</strong> ile dakikalar içinde tamamlanabilir. Bu hem taşınan kişinin hem de nakliye ekibinin zamanını verimli kullanmasını sağlar.</p>
      
      <p>Örnek olarak, 10. kattan yapılacak bir ev taşımasında:</p>
      
      <ul>
        <li>Merdivenden taşıma: 6-8 saat</li>
        <li><strong>Mobil asansör</strong> ile taşıma: 2-3 saat</li>
      </ul>
      
      <h3>3. Ekonomik Avantaj</h3>
      
      <p><strong>Adana asansör kiralama</strong> hizmeti ilk bakışta ek bir maliyet gibi görünse de, uzun vadede ekonomik tasarruf sağlar. İşçilik maliyetleri azalır çünkü daha az personel ile aynı iş tamamlanır. Ayrıca eşya hasarı riski minimuma indiğinden, olası tamir veya yenileme masraflarından kaçınılmış olur.</p>
      
      <h3>4. İşçi Sağlığı ve Güvenliği</h3>
      
      <p><strong>Asansörlü nakliye</strong> yöntemi, taşıma işçilerinin sağlığını korur. Ağır yüklerin merdivenlerden taşınması ciddi bel ve sırt yaralanmalarına neden olabilir. <strong>Adana mobil asansör</strong> kullanımı ile bu riskler ortadan kalkar.</p>
      
      <h3>5. Bina ve Ortak Alan Koruması</h3>
      
      <p>Geleneksel taşımada merdiven korkulukları, duvarlar ve asansör kapıları zarar görebilir. <strong>Ev taşıma asansörü</strong> ile dış cepheden yapılan taşımada binanın iç mekanları korunmuş olur. Bu durum özellikle site ve apartman yönetimleri tarafından da tercih edilen bir yöntemdir.</p>
      
      <h3>Sonuç</h3>
      
      <p><strong>Kiralık asansör</strong> ile taşınmak, modern yaşamın getirdiği en pratik çözümlerden biridir. <strong>Eşya taşıma asansörü</strong> kullanarak taşınmanın avantajları düşünüldüğünde, bu yöntemin neden giderek yaygınlaştığı anlaşılmaktadır. Taşınma planlarınızda <strong>asansör taşıma</strong> seçeneğini değerlendirmenizi öneriyoruz.</p>
    `,
  },
  'adana-kiralik-asansor-fiyatlari': {
    title: 'Adana\'da Kiralık Asansör Fiyatlarını Neler Belirler?',
    description: 'Adana\'da asansör kiralama fiyatlarını etkileyen faktörleri ve bütçenize uygun çözümleri öğrenin.',
    date: '5 Ocak 2025',
    readTime: '6 dk',
    category: 'Fiyatlandırma',
    content: `
      <p><strong>Adana asansör kiralama</strong> fiyatları, birçok faktöre bağlı olarak değişiklik göstermektedir. Bu yazımızda <strong>kiralık asansör</strong> maliyetlerini etkileyen unsurları detaylı şekilde inceleyeceğiz ve bütçenize uygun çözümler için ipuçları paylaşacağız.</p>
      
      <h3>1. Kat Yüksekliği</h3>
      
      <p><strong>Asansör taşıma</strong> fiyatlandırmasında en önemli faktör kat yüksekliğidir. Yüksek katlara çıkmak daha uzun asansör sistemi gerektirir ve operasyon süresi uzar. Genel olarak:</p>
      
      <ul>
        <li>1-5 kat arası: Ekonomik fiyatlandırma</li>
        <li>6-10 kat arası: Standart fiyatlandırma</li>
        <li>10+ kat: Özel ekipman ve ek ücretlendirme</li>
      </ul>
      
      <h3>2. Taşınacak Eşya Miktarı</h3>
      
      <p><strong>Ev taşıma asansörü</strong> kiralama maliyeti, taşınacak eşya miktarına göre de değişir. Tek bir büyük mobilya için farklı, komple ev taşıması için farklı fiyatlandırma uygulanır. <strong>Eşya taşıma asansörü kiralama</strong> hizmetinde genellikle saatlik veya günlük kiralama seçenekleri sunulmaktadır.</p>
      
      <h3>3. Lokasyon ve Ulaşım</h3>
      
      <p><strong>Mobil asansör kiralama</strong> fiyatları, hizmet verilecek lokasyona göre değişebilir. Merkezi ilçeler olan Seyhan, Çukurova ve Yüreğir'de standart fiyatlar uygulanırken, Kozan, Ceyhan gibi ilçelere ulaşım maliyeti eklenebilir.</p>
      
      <p><strong>Adana mobil asansör</strong> ekipmanının taşınması ve kurulumu için uygun park alanı ve erişim yolu olması önemlidir. Dar sokaklar veya zor erişimli lokasyonlarda ek planlama gerekebilir.</p>
      
      <h3>4. Hizmet Süresi</h3>
      
      <p><strong>Nakliye asansörü</strong> kiralama genellikle saatlik bazda fiyatlandırılır. Minimum kiralama süresi genellikle 2-3 saat olarak belirlenir. Uzun süreli projeler için günlük veya haftalık paket fiyatları daha avantajlı olabilir.</p>
      
      <h3>5. Mevsim ve Talep Yoğunluğu</h3>
      
      <p><strong>Asansörlü nakliye</strong> talebi yılın belirli dönemlerinde artış gösterir. Özellikle yaz ayları ve dönem sonu-başı gibi taşınma sezonlarında fiyatlar yükselebilir. Planlı taşınmalarda sezon dışı dönemleri tercih etmek maliyet avantajı sağlayabilir.</p>
      
      <h3>6. Ek Hizmetler</h3>
      
      <p><strong>Adana asansör kiralama</strong> hizmetinde ek hizmetler de fiyatı etkiler:</p>
      
      <ul>
        <li>Paketleme hizmeti</li>
        <li>Söküm-montaj</li>
        <li>Sigorta kapsamı genişletme</li>
        <li>Acil/hafta sonu hizmeti</li>
        <li>Ek personel talebi</li>
      </ul>
      
      <h3>Fiyat Karşılaştırma ve Teklif Alma</h3>
      
      <p><strong>Kiralık asansör</strong> fiyatları için en doğru bilgiyi ücretsiz keşif hizmetimizle alabilirsiniz. Telefon üzerinden verilen fiyatlar yaklaşık olup, kesin fiyat için yerinde değerlendirme gereklidir.</p>
      
      <p>Fiyat teklifi alırken dikkat edilmesi gerekenler:</p>
      
      <ul>
        <li>Tüm maliyetlerin (ulaşım, kurulum, işçilik) dahil olduğundan emin olun</li>
        <li>Sigorta kapsamını sorgulayın</li>
        <li>İptal koşullarını öğrenin</li>
        <li>Referansları kontrol edin</li>
      </ul>
      
      <h3>Sonuç</h3>
      
      <p><strong>Mobil asansör</strong> kiralama maliyeti, yukarıda belirtilen faktörlerin kombinasyonuna göre şekillenir. <strong>Ev taşıma asansörü</strong> kullanmanın sağladığı güvenlik ve zaman tasarrufu düşünüldüğünde, bu hizmet oldukça ekonomik bir yatırımdır. Detaylı fiyat bilgisi için bizimle iletişime geçebilirsiniz.</p>
    `,
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {
      title: 'Sayfa Bulunamadı',
    }
  }

  return {
    title: `${post.title} | Adana Asansör Kiralama Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Adana Asansör Kiralama`,
      description: post.description,
      url: `https://adanaasansorkiralama.com/blog/${slug}`,
      type: 'article',
      locale: 'tr_TR',
      siteName: 'Adana Asansör Kiralama',
    },
    alternates: {
      canonical: `https://adanaasansorkiralama.com/blog/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg hero-pattern py-16 relative">
        <div className="absolute inset-0 bg-primary-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-300 mb-4">
              <Link href="/" className="hover:text-white">Anasayfa</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-secondary-400">{post.title}</span>
            </nav>
            <span className="inline-block bg-secondary-400 text-primary-900 text-sm font-bold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-300">
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
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <article 
                className="prose prose-lg max-w-none prose-headings:text-primary-800 prose-a:text-primary-600 prose-strong:text-primary-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA Box */}
              <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Asansör Kiralama Hizmeti Alın</h3>
                <p className="text-gray-200 mb-6">
                  Profesyonel ekibimizle güvenli ve hızlı taşımacılık için hemen bizi arayın.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+905374092406" className="btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0 (537) 409 24 06
                  </a>
                  <a
                    href="https://wa.me/905374092406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-2"
                  >
                    WhatsApp ile Yazın
                  </a>
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <span className="font-semibold text-gray-700">Bu yazıyı paylaşın:</span>
                <div className="flex gap-3 mt-3">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar currentSlug={slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
