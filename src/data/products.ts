export interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    rating: number;
    img: string;
    tag: string;
}

export const products: Product[] = [
    { id: 1, name: "Smartphone Ultra Z", category: "Elektronik", price: "Rp 8.500.000", rating: 4.8, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", tag: "Terlaris" },
    { id: 2, name: "Headphone Noise Cancel", category: "Audio", price: "Rp 2.200.000", rating: 4.5, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", tag: "Diskon" },
    { id: 3, name: "Laptop Slim Pro 14", category: "Komputer", price: "Rp 15.750.000", rating: 4.9, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80", tag: "Terbaru" },
    { id: 4, name: "Kamera Mirrorless X", category: "Fotografi", price: "Rp 12.000.000", rating: 4.7, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", tag: "" },
    { id: 5, name: "Smartwatch Fit V2", category: "Wearable", price: "Rp 1.500.000", rating: 4.2, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", tag: "Promo" }
];
