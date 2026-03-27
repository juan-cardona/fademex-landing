import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Consultoría Energética para Empresas',
  description: 'Contacta a FADEMEX para consultoría energética empresas, instalación de paneles solares industriales y proyectos solares industriales. Agenda una sesión técnica con nuestros ingenieros.',
  keywords: ['consultoría energética empresas', 'FADEMEX contacto', 'proyectos solares industriales', 'instalación de paneles solares industriales'],
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}
