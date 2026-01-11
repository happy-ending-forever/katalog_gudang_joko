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
    { id: 1, name: "Smartphone Ultra Z", category: "Elektronik", price: "Rp 8.500.000", rating: 4.8, img: "/images/products/product-smartphone.webp", tag: "Terlaris" },
    { id: 2, name: "Headphone Noise Cancel", category: "Audio", price: "Rp 2.200.000", rating: 4.5, img: "/images/products/product-headphone.webp", tag: "Diskon" },
    { id: 3, name: "Laptop Slim Pro 14", category: "Komputer", price: "Rp 15.750.000", rating: 4.9, img: "/images/products/product-laptop.webp", tag: "Terbaru" },
    { id: 4, name: "Kamera Mirrorless X", category: "Fotografi", price: "Rp 12.000.000", rating: 4.7, img: "/images/products/product-camera.webp", tag: "" },
    { id: 5, name: "Smartwatch Fit V2", category: "Wearable", price: "Rp 1.500.000", rating: 4.2, img: "/images/products/product-smartwatch.webp", tag: "Promo" }
];
