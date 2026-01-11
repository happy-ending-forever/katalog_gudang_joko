import React, { useState, useEffect } from 'react';
import { 
  Search, Menu, X, ChevronRight, ChevronLeft, Filter, Star, Heart, MessageCircle, 
  Smartphone, Headphones, Monitor, Camera, Watch, MousePointer2, LayoutGrid, 
  ArrowRight, Ticket, Clock, Tag, Percent, Users, Award, MapPin, Quote
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('home'); // 'home', 'all-products', 'promo', atau 'about'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pengaturan WhatsApp
  const whatsappNumber = "6281234567890";

  const products = [
    { id: 1, name: "Smartphone Ultra Z", category: "Elektronik", price: "Rp 8.500.000", rating: 4.8, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", tag: "Terlaris" },
    { id: 2, name: "Headphone Noise Cancel", category: "Audio", price: "Rp 2.200.000", rating: 4.5, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", tag: "Diskon" },
    { id: 3, name: "Laptop Slim Pro 14", category: "Komputer", price: "Rp 15.750.000", rating: 4.9, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80", tag: "Terbaru" },
    { id: 4, name: "Kamera Mirrorless X", category: "Fotografi", price: "Rp 12.000.000", rating: 4.7, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", tag: "" },
    { id: 5, name: "Smartwatch Fit V2", category: "Wearable", price: "Rp 1.500.000", rating: 4.2, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", tag: "Promo" },
  ];

  const categories = [
    { name: 'Semua', icon: <LayoutGrid size={18} /> },
    { name: 'Elektronik', icon: <Smartphone size={18} /> },
    { name: 'Audio', icon: <Headphones size={18} /> },
    { name: 'Komputer', icon: <Monitor size={18} /> },
    { name: 'Fotografi', icon: <Camera size={18} /> },
    { name: 'Wearable', icon: <Watch size={18} /> },
    { name: 'Aksesoris', icon: <MousePointer2 size={18} /> },
  ];

  const promos = [
    {
      id: 1,
      title: "Promo Gajian Mantap",
      description: "Diskon hingga 50% untuk semua aksesoris komputer.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
      code: "GAJIANJOKO",
      validUntil: "31 Jan 2024",
      color: "from-blue-600 to-blue-400"
    },
    {
      id: 2,
      title: "Flash Sale Audio",
      description: "Dapatkan Headphone premium dengan harga miring hanya hari ini.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      code: "AUDIOFLASH",
      validUntil: "Besok",
      color: "from-purple-600 to-purple-400"
    },
    {
      id: 3,
      title: "Spesial Gadget Baru",
      description: "Potongan langsung Rp 500rb untuk setiap pembelian Smartphone.",
      image: "https://images.unsplash.com/photo-1556656793-062ff987b50d?w=800&q=80",
      code: "BARUJOKO",
      validUntil: "15 Feb 2024",
      color: "from-orange-600 to-orange-400"
    }
  ];

  const testimonials = [
    { id: 1, name: "Budi Santoso", role: "Fotografer", content: "Belanja di Gudang Joko sangat memuaskan. Respon cepat dan barang dijamin original. Bang Joko ramah banget!", rating: 5 },
    { id: 2, name: "Siti Aminah", role: "Mahasiswi", content: "Dapet laptop harga miring banget pas promo gajian. Pengiriman aman sampai depan rumah. Top bgt!", rating: 5 },
    { id: 3, name: "Rendi Wijaya", role: "Gamer", content: "Mouse gamingnya mantap. Udah langganan di sini dari jaman masih ruko kecil sampai sekarang makin gede.", rating: 4 }
  ];

  // Logic Carousel
  useEffect(() => {
    if (view === 'home') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [view, promos.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? promos.length - 1 : prev - 1));

  const homeDisplayProducts = products.slice(0, 5);

  const filteredProducts = products.filter(p => 
    (activeCategory === 'Semua' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsAppOrder = (productName) => {
    const message = `Halo Gudang Joko, saya tertarik untuk membeli produk: ${productName}. Mohon info selanjutnya.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleWhatsAppPromo = (promoTitle) => {
    const message = `Halo Gudang Joko, saya ingin tanya tentang promo: ${promoTitle}. Apakah masih berlaku?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const navigateToCategory = (catName) => {
    setActiveCategory(catName);
    setView('all-products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ProductCard = ({ product }) => (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white mb-6 shadow-sm border border-slate-100 group-hover:shadow-2xl group-hover:shadow-blue-100 transition-all duration-500 transform group-hover:-translate-y-2">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        {product.tag && (
          <div className="absolute top-5 left-5">
            <span className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black text-white shadow-lg ${
              product.tag === 'Terlaris' ? 'bg-amber-500' : product.tag === 'Diskon' ? 'bg-rose-500' : 'bg-blue-600'
            }`}>{product.tag}</span>
          </div>
        )}
        <button className="absolute top-5 right-5 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-slate-300 hover:text-rose-500 transition-all shadow-sm transform hover:scale-110"><Heart size={20} /></button>
        <div className="absolute inset-x-5 bottom-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <div className="bg-white/95 backdrop-blur-sm p-4 rounded-[1.5rem] shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-1.5"><Star size={14} className="text-amber-400 fill-current" /><span className="text-sm font-black text-slate-800">{product.rating}</span></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.category}</span>
           </div>
        </div>
      </div>
      <div className="px-2 space-y-1">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1 tracking-tight">{product.name}</h3>
        <p className="text-2xl font-black text-blue-700 mb-10">{product.price}</p>
        <button onClick={() => handleWhatsAppOrder(product.name)} className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-[1.5rem] font-black hover:bg-green-600 transition-all active:scale-95 shadow-xl shadow-slate-100 hover:shadow-green-100 group/btn">
          <MessageCircle size={20} /> Beli
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setView('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200"><MessageCircle className="text-white w-6 h-6" /></div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent tracking-tight text-nowrap">Gudang Joko</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setView('home')} className={`font-bold transition-colors ${view === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>Beranda</button>
              <button onClick={() => setView('about')} className={`font-bold transition-colors ${view === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>Tentang Kami</button>
              <button onClick={() => setView('all-products')} className={`font-bold transition-colors ${view === 'all-products' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>Marketplace</button>
              <button onClick={() => setView('promo')} className={`font-bold transition-colors ${view === 'promo' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>Promo</button>
              <button onClick={scrollToContact} className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Contact</button>
            </div>
            <div className="hidden md:flex items-center">
              <div className="relative group" onClick={() => setView('all-products')}>
                <input type="text" placeholder="Cari gadget..." className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl w-48 transition-all group-hover:w-64 focus:outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <Search className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 rounded-lg">{isMenuOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 font-bold">
              <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-left py-2">Beranda</button>
              <button onClick={() => { setView('about'); setIsMenuOpen(false); }} className="text-left py-2">Tentang Kami</button>
              <button onClick={() => { setView('all-products'); setIsMenuOpen(false); }} className="text-left py-2">Marketplace</button>
              <button onClick={() => { setView('promo'); setIsMenuOpen(false); }} className="text-left py-2">Promo</button>
              <button onClick={scrollToContact} className="text-left py-2 text-slate-600">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {view === 'home' && (
        <>
          {/* Hero Section with Carousel - Mobile Optimized */}
          <section className="relative overflow-hidden bg-white py-8 md:py-24">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
              {/* Hero Text */}
              <div className="md:w-1/2 space-y-4 md:space-y-8 text-center md:text-left z-10">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] md:text-sm font-bold border border-blue-100">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span> Stok Baru Hari Ini
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">Gudang Joko <br /><span className="text-blue-600">Terlengkap.</span></h1>
                <p className="text-sm md:text-lg text-slate-500 font-medium px-4 md:px-0">Beli gadget idaman tanpa ribet. Harga jujur, unit berkualitas, pesan langsung lewat WhatsApp Bang Joko.</p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-6 md:px-0">
                  <button onClick={() => setView('all-products')} className="bg-blue-600 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-black shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95">Lihat Katalog</button>
                  <button onClick={() => setView('promo')} className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-black hover:bg-slate-50 active:scale-95">Cek Promo</button>
                </div>
              </div>
              
              {/* Image Carousel - Responsive Height */}
              <div className="md:w-1/2 relative group w-full max-w-lg mx-auto md:max-w-none md:px-4">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-slate-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative">
                  {promos.map((promo, index) => (
                    <div 
                      key={promo.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img 
                        src={promo.image} 
                        alt={promo.title} 
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay info promo - Mobile optimized padding */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10 pt-16 md:pt-20">
                        <p className="text-white font-black text-lg md:text-2xl tracking-tight">{promo.title}</p>
                        <p className="text-white/80 text-[10px] md:text-sm font-medium line-clamp-1">{promo.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Navigation Arrows - Hidden on small mobile unless group hover or touch */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-all md:opacity-0 group-hover:opacity-100 active:scale-90"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-all md:opacity-0 group-hover:opacity-100 active:scale-90"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Indicators - Higher on mobile to avoid info text */}
                  <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 md:gap-2">
                    {promos.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 md:h-1.5 transition-all rounded-full ${index === currentSlide ? 'w-6 md:w-8 bg-white' : 'w-1.5 md:w-2 bg-white/40'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Home Categories */}
          <section className="bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Pilih Kategori Gadget</h2>
                <p className="text-slate-500 font-medium text-sm md:text-base">Klik untuk melihat koleksi lengkap kami</p>
              </div>
              <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar justify-start">
                {categories.map((cat) => (
                  <button key={cat.name} onClick={() => navigateToCategory(cat.name)} className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border-2 border-white text-slate-600 hover:border-blue-200 hover:text-blue-600 shadow-sm transition-all whitespace-nowrap group active:scale-95">
                    <span className="text-blue-500 group-hover:scale-110 transition-transform">{cat.icon}</span>
                    <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Home Product Display */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-8 mb-12">
              <div className="w-full sm:w-auto text-center sm:text-left">
                <span className="text-blue-600 font-black uppercase text-xs tracking-[0.2em] mb-2 block">Display Produk</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Rekomendasi Pekan Ini</h2>
              </div>
              <button onClick={() => setView('all-products')} className="flex items-center gap-2 text-blue-600 font-black hover:gap-3 transition-all text-sm md:text-base">Lihat Semua <ArrowRight size={20}/></button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {homeDisplayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </>
      )}

      {view === 'all-products' && (
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
               <button onClick={() => setView('home')} className="text-slate-400 font-bold hover:text-blue-600 flex items-center gap-1 text-sm"><ChevronRight className="rotate-180" size={16}/> Kembali ke Beranda</button>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Marketplace Lengkap</h2>
               <p className="text-slate-500 font-medium">Menjelajahi seluruh stok tersedia di Gudang Joko</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm w-full md:w-max">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" />
                  <input type="text" placeholder="Cari nama produk..." className="w-full pl-10 pr-4 py-2 bg-transparent focus:outline-none font-medium text-sm" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
              </div>
              <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar justify-start">
                {categories.map((cat) => (
                  <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all border-2 whitespace-nowrap active:scale-95 ${
                    activeCategory === cat.name ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-white text-slate-600 hover:border-blue-100 shadow-sm'
                  }`}>
                    <span className={activeCategory === cat.name ? 'text-white' : 'text-blue-500'}>{cat.icon}</span>
                    <span className="font-bold text-xs uppercase tracking-wider">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
              ) : (
                <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
                  <h3 className="text-xl md:text-2xl font-black text-slate-800">Tidak ada produk ditemukan</h3>
                  <button onClick={() => { setActiveCategory('Semua'); setSearchQuery(''); }} className="mt-4 text-blue-600 font-bold underline">Reset Filter</button>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {view === 'promo' && (
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col gap-10">
            <div className="space-y-4 text-center md:text-left">
               <button onClick={() => setView('home')} className="text-slate-400 font-bold hover:text-blue-600 flex items-center gap-1 text-sm"><ChevronRight className="rotate-180" size={16}/> Kembali ke Beranda</button>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Promo Minggu Ini</h2>
               <p className="text-slate-500 font-medium">Gunakan kode promo dan dapatkan penawaran spesial dari Bang Joko</p>
            </div>

            {/* Poster Promo Utama - Mobile Optimized */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 opacity-10"><Ticket size={300} /></div>
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left">
                  <div className="md:w-3/5 space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30 backdrop-blur-sm mx-auto md:mx-0">
                      <Clock size={14} /> Berakhir dalam 2 hari
                    </div>
                    <h3 className="text-3xl md:text-6xl font-black leading-tight tracking-tight">Spesial Promo <br />Tahun Baru!</h3>
                    <p className="text-sm md:text-lg text-blue-50 font-medium max-w-lg">Potongan hingga 1 Juta Rupiah untuk kategori Laptop dan Kamera. Berlaku kelipatan selama stok tersedia.</p>
                    <div className="flex items-center gap-4 bg-white/10 p-3 md:p-4 rounded-2xl border border-white/20 backdrop-blur-md w-fit mx-auto md:mx-0">
                       <span className="text-blue-100 text-[10px] md:text-sm font-bold">KODE:</span>
                       <span className="text-xl md:text-2xl font-black tracking-widest uppercase">JOKONEWYEAR</span>
                    </div>
                  </div>
                  <div className="md:w-2/5 w-full">
                    <div className="bg-white/20 p-3 rounded-[2rem] border border-white/30 backdrop-blur-md">
                      <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80" alt="Promo Utama" className="rounded-2xl shadow-lg w-full h-48 md:h-auto object-cover" />
                    </div>
                  </div>
               </div>
            </div>

            {/* Grid Kartu Promo Lainnya */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 md:mt-10">
              {promos.map((promo) => (
                <div key={promo.id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                   <div className={`h-40 md:h-48 bg-gradient-to-br ${promo.color} relative p-6`}>
                      <div className="absolute top-0 right-0 opacity-10"><Percent size={120} /></div>
                      <div className="relative z-10 text-white space-y-1 md:space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded border border-white/20">Voucher</span>
                        <h4 className="text-xl md:text-2xl font-black leading-tight line-clamp-2">{promo.title}</h4>
                      </div>
                   </div>
                   <div className="p-6 md:p-8 space-y-4 md:space-y-6 text-center md:text-left">
                      <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{promo.description}</p>
                      <div className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                        <span className="text-[10px] font-bold text-slate-400">KODE</span>
                        <span className="text-base md:text-lg font-black text-blue-600 tracking-widest uppercase">{promo.code}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-tight">
                        <span className="text-slate-400">Berlaku sampai:</span>
                        <span className="text-slate-800">{promo.validUntil}</span>
                      </div>
                      <button 
                        onClick={() => handleWhatsAppPromo(promo.title)}
                        className="w-full bg-slate-900 text-white py-3.5 md:py-4 rounded-2xl font-black hover:bg-green-600 transition-all shadow-lg active:scale-95"
                      >
                        Gunakan Promo
                      </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {view === 'about' && (
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col gap-16">
            <div className="space-y-4 text-center md:text-left">
               <button onClick={() => setView('home')} className="text-slate-400 font-bold hover:text-blue-600 flex items-center gap-1 text-sm justify-center md:justify-start"><ChevronRight className="rotate-180" size={16}/> Kembali ke Beranda</button>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Tentang Gudang Joko</h2>
               <p className="text-slate-500 font-medium text-base md:text-lg">Mengenal lebih dekat toko gadget pilihan keluarga Anda.</p>
            </div>

            {/* Sejarah & Visi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mx-auto md:mx-0">
                  <Award size={14} /> Sejak 2020
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">Perjalanan Bang Joko Membangun Gudang Terpercaya</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                  Berawal dari sebuah ruko kecil di pinggiran Jakarta Selatan, Bang Joko memiliki visi untuk menyediakan gadget berkualitas dengan harga yang jujur. Kami percaya bahwa teknologi seharusnya dapat diakses oleh siapa saja tanpa harus membayar mahal.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-2">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                    <p className="text-2xl md:text-3xl font-black text-blue-600">5000+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pelanggan</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                    <p className="text-2xl md:text-3xl font-black text-blue-600">100%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Original</p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                 <div className="bg-blue-100 rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 rotate-2 transform">
                   <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Gudang Joko Toko" className="rounded-[2rem] md:rounded-[2.5rem] shadow-2xl w-full h-64 md:h-auto object-cover" />
                 </div>
              </div>
            </div>

            {/* Kenapa Kami? */}
            <div className="bg-slate-900 text-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16">
              <div className="text-center mb-10 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-black mb-4">Kenapa Memilih Kami?</h3>
                <p className="text-slate-400 font-medium text-sm">Komitmen kami untuk memberikan yang terbaik bagi Anda.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { icon: <Star />, title: "Kualitas Terjamin", desc: "Setiap unit gadget melalui proses quality control ketat sebelum sampai ke tangan Anda." },
                  { icon: <MessageCircle />, title: "Bisa Konsultasi", desc: "Bingung pilih yang mana? Bang Joko siap kasih saran terbaik sesuai kebutuhan dan budget Anda." },
                  { icon: <Users />, title: "Garansi Resmi", desc: "Semua produk bergaransi resmi. Kami bantu proses klaim jika ada kendala di kemudian hari." }
                ].map((item, idx) => (
                  <div key={idx} className="text-center space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">{item.icon}</div>
                    <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimoni Pelanggan */}
            <div className="space-y-10">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Apa Kata Mereka?</h3>
                <p className="text-slate-500 font-medium text-sm">Cerita nyata dari pelanggan setia Gudang Joko.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {testimonials.map((testi) => (
                  <div key={testi.id} className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm relative group">
                    <Quote className="absolute top-6 right-8 text-blue-50" size={50} />
                    <div className="flex text-amber-400 mb-4">
                      {[...Array(testi.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-sm md:text-base text-slate-600 font-medium italic mb-6 relative z-10 leading-relaxed">"{testi.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-black text-sm md:text-lg uppercase">{testi.name[0]}</div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm md:text-base">{testi.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Lokasi Toko */}
            <div className="space-y-8">
               <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3 justify-center md:justify-start">
                    <MapPin className="text-rose-500" /> Kunjungi Toko Kami
                  </h3>
                  <p className="text-slate-500 font-medium mt-2 text-sm">Datang langsung untuk cek kondisi barang sepuasnya.</p>
               </div>
               
               {/* Map Placeholder/Iframe - Responsive Height */}
               <div className="w-full h-[300px] md:h-[400px] bg-slate-200 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl relative">
                  <iframe 
                    title="Gudang Joko Location"
                    className="w-full h-full grayscale-[0.2]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.18341604085!2d106.7725925!3d-6.2238356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e099616d0d%3A0x6331a9829f074d20!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                  
                  {/* Floating Info on Map - Hidden on mobile if too small */}
                  <div className="absolute bottom-4 left-4 right-4 md:right-auto md:left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-slate-100">
                    <p className="font-black text-slate-900 text-sm md:text-base">Gudang Joko Pusat</p>
                    <p className="text-[10px] md:text-xs text-slate-500 mb-2 md:mb-4">Pasar Modern Blok A Kav. 12, Jakarta Selatan</p>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest">
                      <Clock size={12} /> Buka: 09.00 - 21.00 WIB
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 md:pt-24 pb-8 md:pb-12 rounded-t-[2.5rem] md:rounded-t-[4rem] mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-20">
            <div className="space-y-4 md:space-y-6 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="bg-blue-600 p-2 rounded-xl text-nowrap"><MessageCircle className="text-white w-5 h-5 md:w-6 md:h-6" /></div>
                <span className="text-xl md:text-3xl font-black tracking-tighter">Gudang Joko</span>
              </div>
              <p className="text-slate-400 text-xs md:text-base leading-relaxed font-medium">Pusat kulakan gadget berkualitas dengan jaminan harga terbaik. Belanja aman, proses cepat via WA.</p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-black text-white mb-6 md:mb-8 uppercase text-[10px] md:text-xs tracking-[0.3em]">Navigasi</h4>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-slate-400">
                <li><button onClick={() => setView('home')} className="hover:text-blue-400">Beranda</button></li>
                <li><button onClick={() => setView('about')} className="hover:text-blue-400">Tentang Kami</button></li>
                <li><button onClick={() => setView('all-products')} className="hover:text-blue-400">Marketplace</button></li>
                <li><button onClick={() => setView('promo')} className="hover:text-blue-400">Promo</button></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h4 className="font-black text-white mb-8 uppercase text-xs tracking-[0.3em]">Kategori</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                {categories.slice(1, 5).map(c => <li key={c.name}><button onClick={() => navigateToCategory(c.name)} className="hover:text-blue-400">{c.name}</button></li>)}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-black text-white mb-6 md:mb-8 uppercase text-[10px] md:text-xs tracking-[0.3em]">Hubungi Kami</h4>
              <ul className="space-y-4 md:space-y-6 text-xs md:text-sm font-medium">
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <span className="text-blue-500">📍</span> <span className="text-slate-400">Pasar Modern Blok A, Jakarta Selatan</span>
                </li>
                <li className="flex items-center gap-3 justify-center sm:justify-start group cursor-pointer" onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}>
                  <span className="bg-blue-600 p-1.5 rounded-lg text-white">📱</span> <span className="font-black text-white tracking-wide">+{whatsappNumber}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 md:pt-12 text-center text-[10px] font-bold text-slate-500"><p>© 2024 Gudang Joko. All Rights Reserved.</p></div>
        </div>
      </footer>

      {/* Floating WA Button - Rounded Full Minimalist */}
      <button onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-green-500 text-white p-4 md:p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 border-4 md:border-[6px] border-white active:scale-95">
        <MessageCircle size={24} />
      </button>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  );
};

export default App;
