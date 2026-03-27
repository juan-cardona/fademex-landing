import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos Solares Industriales en México | FADEMEX',
  description: 'Más de 150 proyectos solares industriales completados en México. Instalación de paneles solares industriales para fábricas y naves industriales. Empresa de energía solar industrial con cobertura nacional.',
  keywords: ['proyectos solares industriales', 'empresa de energía solar industrial', 'paneles solares para fábricas', 'instalación solar comercial e industrial', 'energía solar para naves industriales', 'paneles solares industriales'],
}

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return children
}
