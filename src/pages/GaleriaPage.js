import React from 'react';

const Galeria = () => {
  const images = [
    {
      src: "https://www.pactoglobal-colombia.org/images/jch-optimize/ng/images_NoticiasHome_2023_PORTS__e5e35.webp",
      description: "Proyecto de protección de puertos ecológicos.",
    },
    {
      src: "https://www.garantia.com/fileadmin/files/Header_Regenwasserfilter.jpg",
      description: "Sistema de filtrado de agua de lluvia para uso doméstico.",
    },
    {
      src: "https://thumbs.dreamstime.com/b/%C2%AA-ilustraci%C3%B3n-reciclar-la-ropa-y-el-s%C3%ADmbolo-del-icono-textil-d-textiles-de-moda-sostenible-%C3%A9tica-para-reducir-rendimiento-232601797.jpg",
      description: "Reciclaje de ropa para reducir el impacto ambiental.",
    },
    {
      src: "https://media.istockphoto.com/id/1126541751/es/foto/sembrar-las-semillas-en-la-suciedad-de-las-manos.jpg?s=612x612&w=0&k=20&c=G0A6JuqlHjKrRMbGt4mfFBzFTwVbWD0LkQ01gFbxwtg=",
      description: "Siembra de semillas para promover la agricultura ecológica.",
    },
    {
      src: "https://cuidadodelmedioambiente.com/wp-content/uploads/2024/02/El-Cuidado-del-Medio-Ambiente-Resumen-2.webp",
      description: "Iniciativas globales para el cuidado del medio ambiente.",
    },
    {
      src: "https://i1.sndcdn.com/artworks-954310bc-334f-4ec1-9684-29419f15c8f1-0-t500x500.jpg",
      description: "Energía renovable para el futuro del planeta.",
    },
  ];

  return (
    <section id="galeria">
      <h1>Galería de Proyectos Ambientales</h1>
      <h7><p className="intro-text">Explora nuestras tecnologías innovadoras y actividades que puedes implementar para la mejora y ayuda de nuestro medio ambiente de forma efectiva, a continuación, si quieres conocer cómo implementar lo que más te interesa, da click en la imagen.</p></h7>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={`Imagen ${index + 1}`} className="gallery-image" />
            <div className="overlay">
              <p className="overlay-text">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;
