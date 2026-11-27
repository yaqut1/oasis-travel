import Link from "next/link";
import { IconWhatsApp } from "@/components/icons";
import { whatsAppUrl } from "@/lib/site-config";

export function WhatsAppFab() {
  return (
    <Link
      href={whatsAppUrl("Hello! I'd like a free quote.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="bg-wa fixed right-4 bottom-4 z-120 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_8px_24px_rgba(31,168,85,0.4)] transition-transform hover:scale-105"
    >
      <IconWhatsApp size={26} />
    </Link>
  );
}