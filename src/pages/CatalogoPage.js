import React, { useState } from 'react';

const CatalogoServicios = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Sembrado Ecológico: Cuidando la Tierra y Tu Salud",
      description: (
        <>
        <h6>Introduccion</h6>
          <ul>
            El sembrado ecológico es una técnica de cultivo que promueve la producción de alimentos sin el uso de productos químicos ni pesticidas. Esta práctica, basada en la sostenibilidad, no solo garantiza alimentos más saludables, sino que también cuida el medio ambiente.
          </ul>
          <h6>Beneficios para los seres humanos:</h6>
          <ul>
            <li>Alimentos más saludables y nutritivos: Los cultivos ecológicos se producen sin pesticidas ni fertilizantes químicos, lo que resulta en alimentos más ricos en nutrientes.</li>
            <li>Menor exposición a químicos: Evitar el uso de productos químicos reduce el riesgo de enfermedades relacionadas con la exposición a sustancias tóxicas.</li>
          </ul>
          <h6>Beneficios para el medio ambiente:</h6>
          <ul>
            <li>Conservación de los recursos naturales: El sembrado ecológico utiliza técnicas como la rotación de cultivos y el uso de abonos orgánicos, contribuyendo a la conservación del suelo y del agua.</li>
            <li>Reducción del impacto ambiental: Al no emplear pesticidas ni fertilizantes sintéticos, se reduce significativamente la huella de carbono y la contaminación del suelo y el agua.</li>
          </ul>
        </>
      ),
      image: "https://img.freepik.com/foto-gratis/hombre-cuidando-su-granja-close-up_23-2148580028.jpg"
    },
    {
      id: 2,
      title: "Riego Automático: Eficiencia en el Uso del Agua",
      description: (
        <>
        <h6>Introduccion</h6>
          <ul>
            El sistema de riego automático permite mantener tus cultivos o jardines perfectamente hidratados con la cantidad de agua exacta que necesitan, sin la intervención manual. Ideal para optimizar recursos y ahorrar tiempo.
          </ul>
          <h6>Beneficios para los seres humanos:</h6>
          <ul>
            <li>Optimización del tiempo: Este sistema automatizado permite que dediques más tiempo a disfrutar de tu jardín sin preocuparte por el riego diario.</li>
            <li>Mayor comodidad: El riego automático se activa según la programación establecida, garantizando que las plantas reciban el cuidado necesario sin esfuerzo manual.</li>
          </ul>
          <h6>Beneficios para el medio ambiente:</h6>
          <ul>
            <li>Ahorro de agua: Este sistema controla la cantidad de agua que se utiliza, evitando el desperdicio y promoviendo un uso responsable del recurso hídrico.</li>
            <li>Reducción de desperdicio: Gracias a la precisión del sistema, se evita el exceso de riego y las fugas, contribuyendo a la conservación del agua.</li>
          </ul>
        </>
      ),
      image: "https://media.istockphoto.com/id/1424932468/es/foto/para-aspersores-de-suministro-de-agua-autom%C3%A1tica.jpg?s=612x612&w=0&k=20&c=t_oc5xYQLV0O7QtasmrzTyOSyB0MdIIO9NX_o3HUF2U="
    },
    {
      id: 3,
      title: "Procesamiento de Residuos Biológicos: Transformando lo Orgánico en Recurso",
      description: (
        <>
        <h6>Introduccion</h6>
        <ul>
            La gestión adecuada de los residuos biológicos es crucial para reducir la contaminación y promover la reutilización. A través del compostaje y otros métodos, los residuos orgánicos se transforman en valiosos recursos como abono natural para el suelo.
          </ul>
          <h6>Beneficios:</h6>
          <ul>
            <li>Reducción de residuos: Este proceso ayuda a disminuir la cantidad de residuos orgánicos enviados a los vertederos.</li>
            <li>Mejora del suelo: El compost resultante enriquece el suelo, promoviendo un ambiente más fértil para las plantas.</li>
            <li>Reciclaje sostenible: Al procesar los residuos biológicos, se promueve una economía circular, donde los materiales orgánicos se reutilizan de manera efectiva.</li>
          </ul>
        </>
      ),
      image: "https://previews.123rf.com/images/normaals/normaals2301/normaals230100172/197807882-instalaci%C3%B3n-de-procesamiento-de-residuos-con-cinta-transportadora-de-basura-esquema-de-trabajo.jpg"
    },
    {
      id: 4,
      title: "Cuidado del Medio Ambiente: Protegiendo Nuestro Futuro",
      description: (
        <>
        <h6>Introduccion</h6>
          <ul>
            El cuidado del medio ambiente es esencial para preservar la biodiversidad y los recursos naturales que sostienen la vida en el planeta. A través de prácticas responsables y sostenibles, podemos contribuir a la protección del entorno natural.
          </ul>
          <h6>Iniciativas:</h6>
          <ul>
            <li>Reducción de la huella ecológica: Adoptar prácticas sostenibles en la agricultura, la gestión de residuos y la utilización de recursos ayuda a reducir el impacto ambiental.</li>
            <li>Preservación de ecosistemas: Iniciativas como la reforestación, el uso eficiente del agua y la conservación de hábitats naturales contribuyen a la protección de la biodiversidad.</li>
          </ul>
        </>
      ),
      image: "https://infomedioambiente.top/wp-content/uploads/5-estrategias-efectivas-para-motivar-a-la-comunidad-a-cuidar-el-medio-ambiente.jpg"
    }
  ];

  return (
    <section id="services">
      <h1>Catálogo de Servicios</h1>
      <div className="service-images">
        <h2>Imágenes de nuestros servicios</h2>
        <div className="image-container">
          {services.map(service => (
            <div key={service.id} className="image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
                onClick={() =>
                  setSelectedServiceId(
                    selectedServiceId === service.id ? null : service.id
                  )
                }
              />
              <div className="hover-text">{service.title}</div>
              {selectedServiceId === service.id && (
                <div className="service-description">{service.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogoServicios;
