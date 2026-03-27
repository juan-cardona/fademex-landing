import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tecnología y Monitoreo Solar Industrial | FADEMEX',
  description: 'Especificaciones técnicas de sistemas fotovoltaicos para empresas. Monitoreo energético industrial 24/7, monitoreo solar industrial, sistemas inteligentes de energía y gestión de energía industrial con componentes Tier 1.',
  keywords: ['monitoreo energético industrial', 'monitoreo solar industrial', 'sistemas inteligentes de energía', 'gestión de energía industrial', 'sistemas fotovoltaicos para empresas', 'instalación de sistemas fotovoltaicos industriales'],
}

export default function TecnologiaLayout({ children }: { children: React.ReactNode }) {
  return children
}
