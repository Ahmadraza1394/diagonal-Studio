import React from "react";

const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-pantone-719 text-white flex items-center justify-center py-24 md:py-32 overflow-hidden">
        <img
          src="/assets/images/3.jpg"
          alt="Fondo de Política de Privacidad"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pantone-black via-pantone-black/70 to-pantone-black/50 z-0"></div>
        <div className="relative z-10 w-full max-w-[1420px] mx-auto px-4 md:px-6 flex flex-col items-start">
          <div className="bg-white text-pantone-black font-abc-monument text-sm px-4 py-2 rounded-full mb-6">
            Última Actualización: {lastUpdated}
          </div>
          <h1 className="font-monument-extended text-5xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            POLÍTICA DE PRIVACIDAD
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 font-abc-monument text-pantone-black/90 text-base md:text-lg leading-relaxed space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed">
            En Diagonal Studio, tu privacidad es nuestra prioridad. Estamos
            comprometidos con la protección de tu información personal y sólo la
            utilizamos como se describe a continuación.
          </p>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              1. Información que recolectamos
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              Podemos recopilar información personal como tu nombre, dirección
              de correo electrónico y organización cuando completas nuestro
              formulario de contacto. También recopilamos información no
              personal, como el tipo de navegador, sistema operativo y páginas
              web visitadas para ayudarnos a gestionar nuestro sitio web.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              2. Uso de tu información
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              Utilizamos la información que recopilamos para responder a tus
              consultas, proporcionarte nuestros servicios y mejorar nuestro
              sitio web. No compartiremos tu información personal con terceros
              sin tu consentimiento, excepto cuando sea requerido por ley.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              3. Seguridad de tu información
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              Utilizamos medidas de seguridad administrativas, técnicas y
              físicas para proteger tu información personal. Si bien hemos
              tomado medidas razonables para asegurar la información personal
              que nos proporcionas, ten en cuenta que, a pesar de nuestros
              esfuerzos, ninguna medida de seguridad es perfecta o impenetrable.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              4. Cambios a esta política de privacidad
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              Podemos actualizar esta Política de Privacidad periódicamente. Te
              notificaremos sobre cualquier cambio publicando la nueva Política
              de Privacidad en esta página. Te recomendamos revisar esta
              Política de Privacidad periódicamente para conocer cualquier
              cambio.
            </p>
          </div>

          <div>
            <h2 className="font-monument text-3xl md:text-4xl text-pantone-black uppercase mb-4">
              5. Contáctanos
            </h2>
            <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
              Si tienes alguna pregunta sobre esta Política de Privacidad, por
              favor contáctanos a través de nuestro formulario de contacto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
