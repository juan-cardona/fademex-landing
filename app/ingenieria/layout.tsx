import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consultoría Energética Industrial e Ingeniería | FADEMEX',
  description: 'Consultoría energética industrial y análisis energético industrial con metodología certificada en 4 fases. Eficiencia energética industrial, gestión energética industrial y reducción de consumo eléctrico industrial para empresas.',
  keywords: ['consultoría energética industrial', 'consultoría energética empresas', 'análisis energético industrial', 'eficiencia energética industrial', 'gestión energética industrial', 'reducción de consumo eléctrico industrial', 'ahorro energético industrial'],
}

export default function IngenieriaLayout({ children }: { children: React.ReactNode }) {
  return children
}
