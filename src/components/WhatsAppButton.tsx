const WhatsAppButton = () => {
  const phone = "8801634699636";
  const text = encodeURIComponent("Hello Coniva Ltd, I'd like to know more about your projects.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Coniva Ltd on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.495-1.318.187-.43.187-.79.144-1.06-.058-.144-.244-.244-.502-.387l-1.93-1.06zM16 26.21a10.2 10.2 0 0 1-5.198-1.423l-3.633.943.973-3.5A10.196 10.196 0 0 1 5.79 16C5.79 10.36 10.36 5.79 16 5.79c5.64 0 10.21 4.57 10.21 10.21 0 5.64-4.57 10.21-10.21 10.21zM16 3.5C9.1 3.5 3.5 9.1 3.5 16c0 2.16.555 4.193 1.534 5.957L3.5 28.5l6.708-1.495A12.43 12.43 0 0 0 16 28.5c6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
