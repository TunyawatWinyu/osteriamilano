const PrenotazioneHero = () => {
  return (
    <div className="relative h-full bg-black/70 text-white">
      <div className="absolute bottom-12 left-6 sm:bottom-16 sm:left-10 lg:bottom-20 lg:left-16 xl:left-20">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-primary" />

          <span className="text-sm font-semibold tracking-[3px] sm:tracking-[5px]">
            PRENOTAZIONI
          </span>
        </div>

        <h1 className="py-3 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Prenota il tuo tavolo
        </h1>
        <p className="text-lg">
          Compila il modulo: ti contatteremo per confermare la disponibilità.
        </p>
      </div>
    </div>
  );
};

export default PrenotazioneHero;
