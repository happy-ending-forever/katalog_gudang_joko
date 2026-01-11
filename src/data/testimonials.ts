export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    { id: 1, name: "Budi Santoso", role: "Fotografer", content: "Belanja di Gudang Joko sangat memuaskan. Respon cepat dan barang dijamin original.", rating: 5 },
    { id: 2, name: "Siti Aminah", role: "Mahasiswi", content: "Dapet laptop harga miring banget pas promo gajian. Top bgt!", rating: 5 },
    { id: 3, name: "Rendi Wijaya", role: "Gamer", content: "Udah langganan di sini dari jaman masih ruko kecil sampai sekarang makin gede.", rating: 4 }
];
