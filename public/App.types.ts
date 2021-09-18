export type WishlistItemType = {
    id: number;
    sku: string;
    name: string;
    price: ItemPriceType;
    sizes: string[],
    image: string,
    brand_name: string,
    amount?: number;
}

type ItemPriceType = {
    original: number;
    promotional: number;
}