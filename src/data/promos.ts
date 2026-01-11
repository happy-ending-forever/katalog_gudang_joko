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
    { id: 1, title: "Promo Gajian Mantap", description: "Diskon hingga 50% untuk semua aksesoris komputer.", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80", code: "GAJIANJOKO", validUntil: "31 Jan 2024", color: "from-blue-600 to-blue-400" },
    { id: 2, title: "Flash Sale Audio", description: "Dapatkan Headphone premium dengan harga miring.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80", code: "AUDIOFLASH", validUntil: "Besok", color: "from-purple-600 to-purple-400" },
    { id: 3, title: "Spesial Gadget Baru", description: "Potongan langsung Rp 500rb untuk Smartphone.", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80", code: "BARUJOKO", validUntil: "15 Feb 2024", color: "from-orange-600 to-orange-400" }
];
