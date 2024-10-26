// components/Hero.js
export default function Hero() {
    return (
      <section className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('image.jpeg.png')" }}>
        <div className="h-full bg-slate-50 bg-opacity-50 flex flex-col items-center justify-center text-center">
        {/* //<img src="/image.jpeg.png" alt="image.jpeg.png" className="h-100 h-64 object-cover" /> */}
          <h2 className="text-4xl text-slate-950 font-bold mb-4">Welcome to My WebSite</h2>
          <p className="text-lg mb-8 text-slate-950 max-w-lg">Explore our amazing content and discover the unique features we have to offer.</p>
          <a href="#" className="px-6 py-3 bg-slate-50 text-pink-700 rounded-full hover:bg-slate-950 transition">
            Get Started
          </a>
        </div>
      </section>
    );
  }
  