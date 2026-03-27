import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | FADEMEX - Energía Solar Industrial',
  description: 'Aviso de privacidad de FADEMEX. Conoce cómo protegemos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
}

export default function AvisoDePrivacidadPage() {
  return (
    <div className="font-sans text-ink min-h-screen bg-canvas">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
              Aviso de Privacidad
            </h1>
            <p className="text-ink-light mb-12 text-lg">
              Última actualización: 19 de Marzo 2026
            </p>

            <div className="prose prose-lg max-w-none text-ink/80 space-y-8">
              <p>
                La protección de sus datos personales y la privacidad es muy importante, es por eso que ponemos a disposición el presente aviso de privacidad con la intención de que nuestros clientes y usuarios puedan conocer la información de carácter personal que se recaba, su finalidad, sus cuidados y métodos para ejercer sus derechos ARCO.
              </p>

              <p>
                Le informamos que el responsable del tratamiento de la información es <strong>FADEMEX</strong>, por lo que de acuerdo a lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su reglamento le informamos lo siguiente:
              </p>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">FINALIDAD</h2>
              <h3 className="text-lg font-semibold text-ink mb-3">¿Qué es la finalidad?</h3>
              <p>
                Este concepto nos indica el tratamiento que haremos de su información, lo cual será únicamente de acuerdo a lo establecido en el presente aviso de privacidad.
              </p>
              <p>
                La finalidad de la obtención de datos personales que recabamos es para poder proporcionarle un servicio de acuerdo a sus necesidades y servicios que ofrece la empresa, por lo que si Usted no desea proporcionar la información que se le solicita nos veremos imposibilitados en ofrecerle el servicio que Usted merece.
              </p>
              <p>La finalidad de la obtención de datos personales que recabamos de Usted en medios análogos son las siguientes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestión, control, administración y actualización de la información relacionada con los clientes del Responsable.</li>
                <li>Identificación de personas físicas y representantes legales o contactos designados por personas.</li>
                <li>Facturación de los servicios y productos proporcionados, así como su cobro judicial o extrajudicial.</li>
                <li>Relación comercial en marketing digital, branding y diseño, video corporativo, fotografía profesional y publicidad exterior.</li>
                <li>Registro histórico de clientes.</li>
                <li>Canal de comunicación.</li>
              </ul>

              <h3 className="text-lg font-semibold text-ink mt-8 mb-3">Finalidades adicionales:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Envíos de información y ofertas comerciales sobre nuestros servicios.</li>
                <li>Levantamiento de encuestas de satisfacción.</li>
                <li>De nuestra página de internet.</li>
              </ul>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">DATOS RECABADOS</h2>
              <p>Los datos personales que recabamos de Usted son los siguientes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre</li>
                <li>Nombre del representante legal (personas morales)</li>
                <li>Domicilio</li>
                <li>Teléfono</li>
                <li>Celular</li>
                <li>Correo electrónico</li>
                <li>RFC (solo cuando realice algún pago)</li>
                <li>ID de Facebook</li>
              </ul>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">TRANSFERENCIA DE DATOS</h2>
              <p>
                EL RESPONSABLE realiza transferencia nacional de datos de nuestros clientes únicamente al momento de hacer algún pago con la empresa, ya que la transferencia se efectúa hacia el Servicio de Administración Tributaria y sus proveedores certificados en virtud de la facturación electrónica, supuesto en el que no se requiere de su consentimiento de acuerdo a lo establecido en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">EJERCICIO DE LOS DERECHOS ARCO</h2>
              <p>
                En todos aquellos casos legalmente procedentes, usted podrá ejercer en todo momento sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) a través de los procedimientos que hemos implementado.
              </p>
              <p>
                La solicitud correspondiente (ver formato de derechos ARCO) deberá cumplir con los requisitos establecidos en la legislación vigente, mediante escrito dirigido a nuestro Departamento de Datos Personales, en el domicilio fiscal de la empresa.
              </p>
              <p>La solicitud deberá contener y acompañar lo siguiente:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Su nombre y domicilio u otro medio para comunicarle la respuesta a su solicitud.</li>
                <li>Los documentos que acrediten su identidad o, en su caso, la representación legal.</li>
                <li>La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los Derechos ARCO.</li>
                <li>Cualquier otro elemento o documento que facilite la localización de los datos.</li>
              </ul>
              <p>
                El Responsable le comunicará, en un plazo máximo de veinte días hábiles, contados desde la fecha en que aquél reciba la solicitud correspondiente, la determinación adoptada. Si la solicitud resulta procedente, ésta se hará efectiva dentro de los quince días hábiles siguientes a la fecha en que el Responsable comunique la respuesta.
              </p>
              <p>
                En caso de que la información proporcionada en su solicitud resulte errónea o insuficiente, o no se acompañen los documentos necesarios para acreditar su identidad o la representación legal correspondiente, el Responsable, dentro de los cinco días hábiles siguientes a la recepción de su solicitud, requerirá la subsanación de las deficiencias para poder dar trámite a la misma. En estos casos, usted contará con diez días hábiles para atender el requerimiento de subsanación, contados a partir del día siguiente en que hubiere recibido esta solicitud. La solicitud correspondiente se tendrá por no presentada si usted no responde dentro de dicho plazo.
              </p>
              <p>
                Usted podrá obtener la información o datos personales solicitados a través de copias simples, documentos electrónicos en formatos convencionales (Word, PDF, etc.), o a través de cualquier otro medio legítimo que garantice y acredite el ejercicio efectivo del derecho solicitado.
              </p>
              <p>
                Usted será responsable de mantener actualizados sus datos personales en posesión de Responsable. Por lo anterior, usted garantiza y responde, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de los datos personales facilitados, y se compromete a mantenerlos debidamente actualizados, comunicando cualquier cambio a Responsable.
              </p>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">REVOCACIÓN DEL CONSENTIMIENTO</h2>
              <p>
                Usted podrá revocar su consentimiento para el tratamiento de sus datos personales, sin efectos retroactivos, en todos aquellos casos en que dicha revocación no suponga la imposibilidad de cumplir obligaciones derivadas de una relación jurídica vigente entre usted y el Responsable.
              </p>
              <p>
                El procedimiento para la revocación del consentimiento, en su caso, será el mismo que el establecido en el apartado inmediato anterior para el ejercicio de los derechos ARCO.
              </p>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">LIMITACIONES SOBRE EL USO Y DIVULGACIÓN DE SUS DATOS PERSONALES</h2>
              <p>
                Usted podrá limitar el uso o divulgación de sus datos personales dirigiendo la solicitud correspondiente a nuestro Responsable de Datos Personales en el domicilio fiscal. Los requisitos para acreditar su identidad, así como el procedimiento para atender su solicitud serán los mismos que los señalados en el apartado &quot;Ejercicio de los derechos ARCO&quot;.
              </p>
              <p>
                El Responsable cuenta con medios y procedimientos para asegurar la inclusión de algunos de sus datos en listados de exclusión propios, cuando usted solicita su inclusión en ellos de forma expresa. El Responsable otorgará a los titulares registrados la constancia de inscripción correspondiente.
              </p>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">MEDIDAS DE SEGURIDAD</h2>
              <p>
                Ya que para nosotros es muy importante la protección de sus datos personales, así como de su privacidad, FADEMEX cumple con las medidas técnicas, administrativas y físicas para el cuidado de su información personal en contra de daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
              </p>

              <h2 className="text-2xl font-bold text-ink mt-12 mb-4">MODIFICACIONES AL AVISO DE PRIVACIDAD</h2>
              <p>
                El responsable podrá modificar, actualizar, extender o de cualquier otra forma cambiar el contenido y alcance del presente aviso de privacidad, en cualquier momento y bajo su completa discreción. En tales casos, publicaremos dichos cambios en el sitio www.fademex.com.
              </p>
              <p>
                Si el aviso de privacidad tuviere cambios sustanciales, se le comunicará por la vía de contacto que tengamos de Usted, además de en la página web antes citada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
