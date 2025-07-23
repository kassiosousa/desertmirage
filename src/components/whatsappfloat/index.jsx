import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/5599981001540"
      className="fixed right-4 top-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  )
}
