import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Energía Solar y Baterías Industriales | FADEMEX',
  description: 'Catálogo completo de servicios: instalación de paneles solares industriales, baterías industriales de energía, sistemas de almacenamiento de energía industrial, peak shaving industrial, time shifting energía y consultoría energética para empresas.',
  keywords: ['baterías industriales de energía', 'sistemas de almacenamiento de energía industrial', 'baterías para respaldo industrial', 'baterías solares industriales', 'peak shaving industrial', 'time shifting energía', 'reducción de picos de demanda', 'continuidad operativa energía', 'consultoría energética empresas'],
}

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return children
}
