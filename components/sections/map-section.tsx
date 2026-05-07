import React from "react";

const MapSection = () => {
  return (
    <section className="h-72 md:h-96">
      <iframe
        title="Localização LCNV Contábil"
        src="https://maps.google.com/maps?q=R.+Sao+Joao+Climaco+656A+Sao+Paulo+SP+Brazil&t=&z=16&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default MapSection;
