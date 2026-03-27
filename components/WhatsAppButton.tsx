'use client'

export default function WhatsAppButton() {
  const phoneNumber = '524791369896'
  const message = encodeURIComponent('Hola, me interesa conocer más sobre las soluciones de energía solar de FADEMEX.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.316 22.612c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.97-7.826-6.81-8.064-7.124-.23-.314-1.932-2.574-1.932-4.908 0-2.334 1.222-3.48 1.656-3.956.39-.432.924-.604 1.234-.604.314 0 .544 0 .782.014.314.014.544.014.834.638.35.768 1.208 2.942 1.312 3.156.106.214.192.476.038.77-.144.3-.22.478-.432.742-.214.264-.452.588-.642.788-.214.228-.436.476-.188.932.248.456 1.104 1.818 2.37 2.946 1.63 1.452 3.004 1.902 3.43 2.116.432.214.682.18.932-.108.256-.292 1.082-1.258 1.37-1.69.288-.432.576-.358.968-.214.396.144 2.502 1.18 2.932 1.396.432.214.716.324.822.502.104.178.104 1.03-.286 2.13z" />
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
    </a>
  )
}
