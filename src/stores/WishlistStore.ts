import {createContext} from "react";
import {WishlistItemType} from "../App.types"

export type WishlistContextType = {
    wishlistOpen: boolean;
    setWishlistOpen: (w: boolean) => void;
    wishlistItems: WishlistItemType[];
}

const initialState:WishlistContextType = {
    wishlistOpen: false,
    setWishlistOpen: () => {},
    wishlistItems: [] as WishlistItemType[]
}

export const WishlistContext = createContext<WishlistContextType>(initialState);