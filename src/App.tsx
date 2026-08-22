import "./App.css";

function App() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 border-b border-gray-800">
        <h1 className="font-heading font-bold text-white text-2xl">
          Squiwell
          <span className="text-accent-purple hover:text-green-600 transition-colors">
            Shop
          </span>
        </h1>
        <div className="flex gap-8 text-gray-400 ">
          <a href="#" className="hover:text-accent-purple transition-colors">
            Kniver
          </a>
          <a href="#" className="hover:text-accent-purple transition-colors">
            Masker
          </a>
          <a href="#" className="hover:text-accent-purple transition-colors">
            Figurer
          </a>
          <a href="#" className="hover:text-accent-purple transition-colors">
            Om Oss
          </a>
        </div>
        <div>🛒</div>
      </nav>

      <section className="flex flex-col items-center text-center py-24 px-6 border-b border-gray-800">
        <span className="text-accent-cyan border px-2 rounded">
          Limited drop - Høst 2026
        </span>

        <h1 className="text-5xl font-heading font-bold text-white">
          Craft your <span className="text-accent-purple">Legend</span>. <br />
          Print. Collect. Flex.
        </h1>
        <p className="text-gray-400 max-w-md">
          Håndlagde 3D-printede kniver, masker og figurer for gamere som vil eie
          noe ekte fra verdenen de elsker.
        </p>

        <div className="flex gap-4">
          <button className="font-heading bg-accent-purple text-white px-6 py-2 rounded">
            Se kolleksjon
          </button>
          <button className="font-heading text-white bg-transparent border rounded px-6 py-2">
            Custom bestilling
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
