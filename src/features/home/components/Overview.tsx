import CarouselDefault from "../../../global_components/Carousel";

function Overview() {
  //TODO: remplacer les textes par des images
  const carousel_props = [
    { description: "Découvrez des artistes" },
    { description: "Explorez des événements" },
    { description: "Suivez vos favoris" },
    { description: "Trouvez ce qui se passe près de chez vous" },
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
