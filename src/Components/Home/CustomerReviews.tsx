import { Star } from "reicon-react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Marco R.",
      text: "Un'esperienza fantastica. Piatti deliziosi e atmosfera davvero elegante.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sofia M.",
      text: "Cucina italiana autentica, ingredienti ottimi e servizio impeccabile.",
      rating: 5,
    },
    {
      id: 3,
      name: "Luca B.",
      text: "Un posto elegante e accogliente. Torneremo sicuramente.",
      rating: 5,
    },
  ];
  return (
    <section className="mx-auto my-24 flex flex-col max-w-7xl gap-12 px-6 lg:my-30 lg:flex-col lg:px-16 xl:px-24 2xl:px-32">
      {/* TEXT */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <p className="text-sm tracking-[3px] text-matcha-green">
            DICONO DI NOI
          </p>
        </div>
        <div className="my-4">
          <h2 className="font-heading text-4xl font-light md:text-5xl">
            Le parole dei nostri ospiti
          </h2>
        </div>
      </div>

      {/* Review */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.id} className="border border-gray-200 p-8">
            {/* Stars */}
            <div className="mb-5 flex gap-1">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star
                  weight="Filled"
                  key={index}
                  className="text-primary"
                  size={16}
                />
              ))}
            </div>
            {/* Review */}
            <p className="text-lg leading-relaxed text-gray-600">
              {review.text}
            </p>
            {/* Name */}
            <p className="mt-6 font-semibold"> — {review.name} </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
