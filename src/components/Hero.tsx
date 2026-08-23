function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-24 px-6 border-b border-gray-800 gap-6">
      <span className="text-accent-cyan border px-2 rounded">
        Limited drop - Høst 2026
      </span>

      <h1 className="text-5xl font-heading font-bold text-white uppercase">
        Craft your{" "}
        <span className="text-accent-purple [text-shadow:0_0_24px_rgba(124,58,237,0.6)]">
          Legend
        </span>
        . <br />
        Print. Collect. Flex.
      </h1>
      <p className="text-gray-400 max-w-md">
        Håndlagde 3D-printede kniver, masker og figurer for gamere som vil eie
        noe ekte fra verdenen de elsker.
      </p>

      <div className="flex gap-4">
        <button className="font-heading bg-accent-purple uppercase text-white px-6 py-2 rounded">
          Se kolleksjon
        </button>
        <button className="font-heading text-white uppercase bg-transparent border border-gray-400 rounded px-6 py-2">
          Custom bestilling
        </button>
      </div>
    </section>
  );
}

export default Hero;
