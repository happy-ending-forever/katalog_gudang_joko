export interface Promo {
    id: number;
    title: string;
    description: string;
    image: string;
    code: string;
    validUntil: string;
    color: string;
}

export const promos: Promo[] = [
    { id: 1, title: "Promo Gajian Mantap", description: "Diskon hingga 50% untuk semua aksesoris komputer.", image: "/images/promos/promo-gajian.webp", code: "GAJIANJOKO", validUntil: "31 Jan 2024", color: "from-blue-600 to-blue-400" },
    { id: 2, title: "Flash Sale Audio", description: "Dapatkan Headphone premium dengan harga miring.", image: "/images/promos/promo-audio.webp", code: "AUDIOFLASH", validUntil: "Besok", color: "from-purple-600 to-purple-400" },
    { id: 3, title: "Spesial Gadget Baru", description: "Potongan langsung Rp 500rb untuk Smartphone.", image: "/images/promos/promo-gadget.webp", code: "BARUJOKO", validUntil: "15 Feb 2024", color: "from-orange-600 to-orange-400" }
];
