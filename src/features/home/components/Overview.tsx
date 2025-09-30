import CarouselDefault from "../../../global_components/Carousel";

function Overview() {
  const carousel_props = [
    { desciption: "🎶 Découvrez des artistes" },
    { desciption: "📅 Explorez des événements" },
    { desciption: "⭐ Suivez vos favoris" },
    { desciption: "📍 Trouvez ce qui se passe près de chez vous" },
  ];
  return (
    <>
      <div className="min-h-24">
        <CarouselDefault details={carousel_props} />
      </div>
    </>
  );
}

export default Overview;
