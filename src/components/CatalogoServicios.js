import React from 'react';

const CatalogoServicios = () => {
  return (
    <section id="services">
      <h1>Catálogo de Servicios</h1>
      <h5>
        <ul>
          <li>Sembrado ecológico</li>
          <li>Riego automático</li>
          <li>Procesamiento de residuos biológicos</li>
          <li>Cuidado del medio ambiente</li>
        </ul>
      </h5>

      {/* Sección de imágenes debajo de los servicios */}
      <div className="service-images">
        <h2>Imágenes de nuestros servicios</h2>
        <div className="image-container">
          {/* Fila 1 de imágenes */}
          <div className="image-row">
            <img 
              src="https://img.freepik.com/foto-gratis/hombre-cuidando-su-granja-close-up_23-2148580028.jpg" 
              alt="Sembrado ecológico" 
              className="service-image" 
            />
            <img 
              src="https://media.istockphoto.com/id/1424932468/es/foto/para-aspersores-de-suministro-de-agua-autom%C3%A1tica.jpg?s=612x612&w=0&k=20&c=t_oc5xYQLV0O7QtasmrzTyOSyB0MdIIO9NX_o3HUF2U=" 
              alt="Riego automático" 
              className="service-image" 
            />
          </div>
          {/* Fila 2 de imágenes */}
          <div className="image-row">
            <img 
              src="https://previews.123rf.com/images/normaals/normaals2301/normaals230100172/197807882-instalaci%C3%B3n-de-procesamiento-de-residuos-con-cinta-transportadora-de-basura-esquema-de-trabajo.jpg" 
              alt="Procesamiento de residuos" 
              className="service-image" 
            />
            <img 
              src="https://infomedioambiente.top/wp-content/uploads/5-estrategias-efectivas-para-motivar-a-la-comunidad-a-cuidar-el-medio-ambiente.jpg" 
              alt="Cuidado del medio ambiente" 
              className="service-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogoServicios;
