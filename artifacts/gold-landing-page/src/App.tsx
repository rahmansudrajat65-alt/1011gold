import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Check, ChevronDown, Gem, Instagram,
  MapPin, Menu, MessageCircle, Phone, Scale, ShieldCheck, X,
} from 'lucide-react';

const WA = 'https://wa.me/6285730091998?text=';
const msg = (text: string) => `${WA}${encodeURIComponent(text)}`;
const iconArrow = <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />;

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand-lockup${footer ? ' footer-brand' : ''}`} href="#home" aria-label={footer ? '1011gold, kembali ke atas' : '1011gold, ke halaman utama'}>
      <span className="brand-symbol"><span>10</span><i /><span>11</span></span>
      <span className="brand-wordmark">1011<span>GOLD</span></span>
    </a>
  );
}

const services = [
  { number: '01 / BELI', icon: Gem, title: <>Beli Emas<br />Antam</>, description: 'Pilih emas Antam sesuai kebutuhan Anda. Tanyakan pilihan ukuran dan ketersediaan stok terkini.', link: 'Tanya ketersediaan', query: 'Halo 1011gold, saya ingin bertanya tentang pembelian emas Antam dan ketersediaan stok.' },
  { number: '02 / JUAL KEMBALI', icon: Scale, title: <>Buyback Emas<br />Antam</>, description: 'Jual kembali emas Antam melalui pemeriksaan dan penjelasan nilai yang transparan.', link: 'Tanya buyback Antam', query: 'Halo 1011gold, saya ingin bertanya tentang buyback emas Antam.' },
  { number: '03 / JUAL KEMBALI', icon: ShieldCheck, title: <>Buyback<br />Perhiasan Emas</>, description: 'Perhiasan Anda dinilai secara profesional dengan mempertimbangkan kadar dan kondisi.', link: 'Tanya penilaian', query: 'Halo 1011gold, saya ingin bertanya tentang buyback perhiasan emas.' },
];
const steps = [
  ['01', 'Hubungi kami', 'Sampaikan kebutuhan dan jenis emas yang ingin dijual.'],
  ['02', 'Pemeriksaan', 'Kami memeriksa berat, kadar, kondisi, dan detail produk bersama Anda.'],
  ['03', 'Informasi harga', 'Harga buyback diinformasikan berdasarkan hasil penilaian dan kondisi pasar.'],
  ['04', 'Transaksi', 'Lanjutkan transaksi setelah nilai dan ketentuan disepakati.'],
  ['05', 'Selesai', 'Transaksi dituntaskan dengan proses yang jelas.'],
];
const faqs = [
  ['Apakah emas Antam bisa dijual kembali?', 'Ya, kami melayani buyback emas Antam. Nilai transaksi diinformasikan setelah pemeriksaan dan sebelum Anda memutuskan.'],
  ['Apakah menerima buyback perhiasan dan bagaimana penilaiannya?', 'Kami menerima perhiasan emas untuk penilaian. Nilai mempertimbangkan kadar, berat, kondisi, dan hasil pemeriksaan.'],
  ['Mengapa harga emas bisa berubah?', 'Harga emas dapat bergerak mengikuti kondisi pasar. Harga jual dan nilai buyback dapat berubah sewaktu-waktu, sehingga perlu dikonfirmasi sebelum transaksi.'],
  ['Bagaimana cara membeli emas Antam?', 'Hubungi kami untuk menanyakan gramasi, harga terbaru, dan ketersediaan. Informasi dapat berubah sesuai stok dan kondisi pasar.'],
  ['Bagaimana cara mengecek harga emas hari ini?', 'Tanyakan harga jual Antam dan informasi buyback terbaru melalui WhatsApp. Kami tidak menampilkan harga live di halaman ini.'],
  ['Bisakah saya bertanya dulu sebelum menjual emas?', 'Tentu. Anda dapat berkonsultasi terlebih dahulu mengenai pemeriksaan, penilaian, dan prosesnya tanpa harus langsung melanjutkan transaksi.'],
];
const weights = ['0.5 g', '1 g', '2 g', '5 g', '10 g', '25 g', '50 g', '100 g'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.title = '1011gold — Emas Asli. Transaksi Transparan.'; }, []);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="landing-page">
      <header className="site-header">
        <div className="header-note"><span className="note-mark" aria-hidden="true" /><span>Emas asli. Transaksi transparan.</span>
          <a href={msg('Halo 1011gold, saya ingin bertanya tentang emas.')}>Hubungi kami {iconArrow}</a>
        </div>
        <div className="nav-wrap">
          <Brand />
          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navigasi utama" id="primary-navigation">
            <a href="#home" onClick={closeMenu}>Home</a><a href="#antam" onClick={closeMenu}>Emas Antam</a>
            <a href="#buyback" onClick={closeMenu}>Buyback</a><a href="#cara-transaksi" onClick={closeMenu}>Cara Transaksi</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a><a href="#kontak" onClick={closeMenu}>Kontak</a>
            <a className="nav-contact-mobile" href={msg('Halo 1011gold, saya ingin menanyakan harga jual emas Antam terbaru.')}>CEK HARGA {iconArrow}</a>
          </nav>
          <a className="nav-cta" href={msg('Halo 1011gold, saya ingin menanyakan harga jual emas Antam terbaru.')}>CEK HARGA {iconArrow}</a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-inner page-shell">
            <div className="hero-copy">
              <div className="eyebrow"><span /> MITRA EMAS ANDA</div>
              <p className="hero-brand">1011GOLD</p>
              <h1>JUAL BELI EMAS<br /><em>ANTAM &amp; LOGAM MULIA</em></h1>
              <p className="hero-subtitle">Emas Asli Indonesia, Investasi Tanpa Ragu</p>
              <p className="hero-description">Transaksi emas Antam dan Logam Mulia yang mudah, transparan, dan profesional.</p>
              <p className="hero-services">Beli Emas Antam <b>·</b> Buyback Emas Antam <b>·</b> Buyback Perhiasan Emas</p>
              <div className="hero-actions">
                <a className="button button-primary" href={msg('Halo 1011gold, saya ingin cek harga emas Antam hari ini sekaligus bertanya tentang proses dan penilaian buyback emas.')}>CEK HARGA EMAS HARI INI &amp; TANYA BUYBACK {iconArrow}</a>
              </div>
              <div className="hero-assurance"><ShieldCheck size={18} strokeWidth={1.5} /><span>Informasi jelas di setiap langkah</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-gallery">
                <div className="hero-image-frame">
                  <img className="hero-image" src={`${import.meta.env.BASE_URL}images/gold-bars-product.png`} alt="Kepingan emas dalam kemasan kartu putih, beberapa bertuliskan IMITASI" />
                </div>
                <div className="hero-image-frame">
                  <img className="hero-image" src={`${import.meta.env.BASE_URL}images/gold-jewelry.png`} alt="Perhiasan emas berupa gelang, kalung, cincin, dan koin" />
                </div>
              </div>
            </div>
            <a className="scroll-hint" href="#keunggulan"><span>GULIR UNTUK MENJELAJAHI</span><ArrowDown size={14} /></a>
          </div>
        </section>
        <section className="trust-band" id="keunggulan" aria-label="Keunggulan 1011gold">
          <div className="page-shell trust-inner">
            <p>Pilihan cermat,<br /><strong>transaksi tenang.</strong></p>
            <div className="trust-items">{['Transaksi transparan', 'Produk emas Antam', 'Layanan buyback', 'Penilaian profesional', 'Proses mudah'].map((item, i) =>
              <div className="trust-item" data-testid={`benefit-${i + 1}`} key={item}><span className="trust-check"><Check size={13} /></span>{item}</div>)}</div>
          </div>
        </section>
        <section className="section services-section" id="layanan">
          <div className="page-shell">
            <div className="section-heading"><div><div className="eyebrow"><span /> LAYANAN KAMI</div><h2>Bertransaksi emas,<br /><em>dengan cara yang tepat.</em></h2></div>
              <p>Kebutuhan berbeda, perhatian yang sama. Kami mendampingi Anda dengan informasi yang terbuka sejak awal.</p></div>
            <div className="service-grid">{services.map(({ number, icon: Icon, title, description, link, query }, i) =>
              <article className={`service-card${i === 0 ? ' service-card-featured' : ''}`} key={number}>
                <div className="card-top"><span className="card-number">{number}</span><span className="service-icon"><Icon size={20} strokeWidth={1.4} /></span></div>
                <h3>{title}</h3><p>{description}</p><a href={msg(query)}>{link}<ArrowRight size={16} /></a>
              </article>)}</div>
          </div>
        </section>
        <section className="why-section" id="mengapa-emas">
          <div className="page-shell why-layout">
            <div className="why-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="why-number">10<span>11</span></div>
              <div className="why-caption">ASET NYATA <span>·</span> NILAI LINTAS WAKTU</div><div className="why-side-note">SEBUAH PILIHAN<br />YANG BERMAKNA</div></div>
            <div className="why-copy"><div className="eyebrow eyebrow-light"><span /> MENYIMPAN NILAI</div><h2>Kenapa<br /><em>emas?</em></h2>
              <p className="why-lead">Aset nyata yang bisa Anda genggam.</p>
              <p>Emas telah lama menjadi salah satu pilihan untuk menyimpan nilai. Wujudnya yang nyata dan mudah dikenali membuatnya relevan sebagai bagian dari perencanaan keuangan pribadi.</p>
              <p>Setiap keputusan tetap perlu disesuaikan dengan kebutuhan dan tujuan Anda. Emas bukan janji hasil, melainkan salah satu aset yang dapat dipertimbangkan.</p>
              <a className="light-link" href="#antam">Kenali emas Antam <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>
        <section className="section antam-section" id="antam">
          <div className="page-shell antam-layout">
            <div className="antam-copy"><div className="eyebrow"><span /> EMAS ANTAM / LOGAM MULIA</div><h2>Presisi dalam<br /><em>setiap gram.</em></h2>
              <p>Emas batangan Antam dikenal dengan kadar kemurnian 99.99%. Tersedia dalam beberapa pilihan berat untuk kebutuhan yang beragam.</p>
              <div className="purity-spec"><span className="spec-large">99.99<sup>%</sup></span><span className="spec-label">KADAR KEMURNIAN<br />EMAS ANTAM</span></div>
              <p className="availability-note"><span className="availability-dot" /> Ukuran dan ketersediaan dapat berubah. Silakan tanyakan stok terkini.</p>
              <a className="button button-primary" href={msg('Halo 1011gold, saya ingin menanyakan ketersediaan stok emas Antam.')}>Tanyakan ketersediaan {iconArrow}</a>
            </div>
            <div className="weight-panel"><div className="weight-panel-head"><span>PILIHAN BERAT</span><span>ANTAM / LM</span></div>
              <div className="weight-grid">{weights.map((weight, i) => <div className={`weight-item${i === 7 ? ' weight-item-large' : ''}`} data-testid={`weight-${i + 1}`} key={weight}><span className="weight-line" /><strong>{weight}</strong><span className="weight-type">EMAS BATANGAN</span></div>)}</div>
              <div className="weight-panel-foot"><span>Ukuran dapat berbeda ketersediaannya</span><span>01 — 08</span></div>
            </div>
          </div>
        </section>
        <section className="price-section" id="harga">
          <div className="page-shell price-layout"><div className="price-mark"><span>HARGA</span><span>HARI INI</span><i /></div>
            <div className="price-copy"><div className="eyebrow eyebrow-light"><span /> INFORMASI HARGA</div><h2>Harga berubah.<br /><em>Informasi tetap jelas.</em></h2>
              <p>Hubungi kami untuk harga jual Antam dan informasi buyback terbaru. Harga emas dapat berubah sewaktu-waktu mengikuti kondisi pasar, jadi konfirmasikan kembali sebelum transaksi.</p></div>
            <a className="button button-gold" href={msg('Halo 1011gold, saya ingin menanyakan informasi harga emas terbaru.')}>Tanyakan harga terbaru {iconArrow}</a>
          </div>
        </section>
        <section className="section buyback-section" id="buyback">
          <div className="page-shell"><div className="section-heading buyback-heading"><div><div className="eyebrow"><span /> PUNYA EMAS YANG INGIN DIJUAL?</div>
            <h2>JANGAN HANYA DISIMPAN.<br /><em>KETAHUI NILAINYA.</em></h2></div>
            <p>Konsultasikan emas Antam atau perhiasan Anda. Kami akan menjelaskan proses pemeriksaan dan penilaian, lalu memberi informasi nilai sebelum Anda memutuskan.</p></div>
            <div className="steps-grid" id="cara-transaksi">{steps.map(([n, title, text]) => <article className="step-item" key={n}><span className="step-number">{n}</span><span className="step-rule" /><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className="buyback-banner"><div className="buyback-banner-icon"><MessageCircle size={22} strokeWidth={1.4} /></div>
              <div><span className="banner-kicker">KONSULTASI SEBELUM MEMUTUSKAN</span><p>Kenali nilai emas Anda.</p></div>
              <a className="button button-primary" href={msg('Halo 1011gold, saya ingin tanya buyback sekarang. Saya ingin mengetahui proses dan penilaian emas saya.')}>TANYA BUYBACK SEKARANG {iconArrow}</a>
            </div>
          </div>
        </section>
        <section className="faq-section section" id="faq">
          <div className="page-shell faq-layout"><div className="faq-intro"><div className="eyebrow"><span /> PERTANYAAN UMUM</div><h2>Yang ingin<br /><em>Anda ketahui.</em></h2>
            <p>Belum menemukan jawaban yang dicari? Kami siap membantu lewat WhatsApp.</p>
            <a className="text-link" href={msg('Halo 1011gold, saya memiliki pertanyaan seputar layanan.')}>Tanyakan langsung {iconArrow}</a></div>
            <div className="faq-list">{faqs.map(([question, answer], i) => <details className="faq-item" key={question}>
              <summary data-testid={`faq-question-${i + 1}`}><span className="faq-count">{String(i + 1).padStart(2, '0')}</span><span className="faq-question">{question}</span><ChevronDown size={18} /></summary><p>{answer}</p>
            </details>)}</div>
          </div>
        </section>
        <section className="contact-section" id="kontak"><div className="contact-ornament" aria-hidden="true" />
          <div className="page-shell contact-inner"><div className="eyebrow eyebrow-light"><span /> 1011GOLD / SUKAMANTRI</div><h2>Mulai dari<br /><em>percakapan yang jujur.</em></h2>
            <p>Kami siap membantu Anda mengenal pilihan emas dan proses transaksi dengan lebih jelas.</p>
            <a className="button button-gold" href={msg('Halo 1011gold, saya ingin berbicara dengan tim 1011gold.')}>Hubungi 1011gold {iconArrow}</a>
            <div className="contact-details">
              <a href="https://maps.app.goo.gl/fgMhQwt6HH1NHTSx9" target="_blank" rel="noreferrer"><MapPin size={16} /><span>Jl. Sukamantri 2</span>{iconArrow}</a>
              <a href="tel:+6285730091998"><Phone size={16} /><span>085 7300 91998</span></a>
              <a href="https://instagram.com/1011gold" target="_blank" rel="noreferrer"><Instagram size={16} /><span>@1011gold</span>{iconArrow}</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-shell footer-main"><Brand footer /><p>Beli Emas Antam · Buyback Antam · Buyback Perhiasan</p>
          <a href={msg('Halo 1011gold, saya ingin bertanya seputar layanan.')}>Hubungi kami {iconArrow}</a></div>
        <div className="page-shell footer-bottom"><span>© 2026 1011gold</span><span>Harga dan ketersediaan dapat berubah sewaktu-waktu.</span>
          <a href="#home">Kembali ke atas <ArrowUp size={13} /></a></div>
      </footer>
    </div>
  );
}

export default App;