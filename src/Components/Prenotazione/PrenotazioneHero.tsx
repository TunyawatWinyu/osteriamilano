const PrenotazioneHero = () => {
  return (
    <div className="relative h-full bg-black/70 text-white">
      <div className="absolute bottom-8 left-5 right-5 sm:bottom-16 sm:left-10 sm:right-auto lg:bottom-20 lg:left-16 xl:left-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="h-px w-8 bg-primary sm:w-10" />

          <span className="text-xs font-semibold tracking-[2px] sm:text-sm sm:tracking-[5px]">
            PRENOTAZIONI
          </span>
        </div>

        <h1 className="py-3 font-heading text-3xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Prenota il tuo tavolo
        </h1>

        <p className="max-w-[350px] text-sm leading-relaxed sm:max-w-xl sm:text-lg">
          Compila il modulo: ti contatteremo per confermare la disponibilità.
        </p>
      </div>
    </div>
  );
};

export default PrenotazioneHero;
