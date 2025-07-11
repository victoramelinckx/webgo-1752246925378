
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Llevamos tu negocio a internet con rapidez y soporte 24/7, para que vendas sin preocuparte." cta1="Digitaliza Hoy" />
<How step1Title="Comienza Ya" step1Desc="Contáctanos para iniciar tu digitalización." step2Title="Creamos Tu Web" step2Desc="Web de ventas lista en 24 horas." step3Title="Soporte 24/7" step3Desc="Estamos siempre disponibles para ayudarte." />
<Aboutus headline="WebGo: Vende Más, Sin Esfuerzo" subheadline="Transformamos tus ventas online fácilmente, ahorrándote tiempo y esfuerzo." beneficiotitulo1="Gestión Completa" beneficio1="Simplifica tu presencia digital." beneficiotitulo2="Ventas Incrementadas" beneficio2="Aumenta clientes sin complicaciones." />
<Services heading="Impulsa Tu Negocio Digitalmente" description="Creamos y gestionamos tu web para aumentar ventas sin esfuerzo." services={[{"name":"Desarrollo Express","icon":"rocket","description":"Web de ventas en 24 horas."},{"name":"Soporte 24/7","icon":"support","description":"Asistencia continua, sin preocupaciones."},{"name":"Optimización SEO","icon":"search","description":"Mejora tu visibilidad online con [producto]."},{"name":"Gestión de Contenidos","icon":"edit","description":"Publica contenido sin límites."},{"name":"Marketing Digital","icon":"megaphone","description":"Aumenta tu alcance y ventas."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita compras con múltiples opciones."}]} />
<BeforeAndAfter subheadline="Proyectos Web Impactantes que Transforman y Elevan tu Presencia Digital." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo puede ayudarte a crear una tienda online profesional que amplíe tu alcance más allá de las recomendaciones. Te guiamos en cada paso para que puedas vender en línea sin complicaciones."},{"pregunta":"¿Es difícil gestionar un sitio web con WebGo si no tengo experiencia?","respuesta":"No te preocupes, WebGo se encarga de la gestión técnica de tu sitio web. Nuestro servicio está diseñado para que te enfoques en tu negocio mientras nosotros nos ocupamos de la parte digital."},{"pregunta":"¿Cuáles son los beneficios de vender online con WebGo?","respuesta":"Vender online con WebGo te permite alcanzar a más clientes, aumentar tus ventas y mejorar la visibilidad de tu marca sin necesidad de experiencia previa en marketing digital."},{"pregunta":"¿WebGo ofrece alguna solución para generar ventas online de forma eficaz?","respuesta":"Sí, WebGo ofrece herramientas y estrategias personalizadas para atraer tráfico a tu sitio web y convertir visitantes en clientes, optimizando tus ventas online de manera efectiva."},{"pregunta":"¿Qué pasa si no tengo tiempo para gestionar mi sitio web?","respuesta":"Con WebGo, no necesitas preocuparte por el tiempo de gestión. Nos encargamos de todos los aspectos técnicos para que puedas dedicarte a lo que mejor haces: tu negocio."}]} />
<BookAppointment 
                      heading="Transforma Recomendaciones en Ventas Online" 
                      description="Descubre cómo WebGo puede digitalizar tu negocio y aumentar tus ventas sin que tengas que gestionar un sitio web. ¡Convierte tus recomendaciones en ingresos ahora!"
                      formPostUrl="api/contact-us"
                      projectId="1YianvElcFgZp4ieFYukNLkN0d53"
                    />
<Footer />
    </main>
  );
}
