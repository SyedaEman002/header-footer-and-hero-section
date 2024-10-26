export default function Home() {
    return (
      // components/Header.js
      <header className="bg-slate-50 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-slate-950 font-bold">This is the header section.</h1>
          <nav className="space-x-4">
            <a href="#" className="hover: text-slate-950">Home</a>
            <a href="#" className="hover: text-slate-950">About</a>
            <a href="#" className="hover: text-slate-950">Contact</a>
          </nav>
        </div>
      </header>
      
    )
  }
  