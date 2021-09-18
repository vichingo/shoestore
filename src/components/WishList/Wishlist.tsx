//components
import WishlistItem from "../WishListItem/WishlistItem";

//styles
import { Wrapper } from "./Wishlist.styles";

//types
import { WishlistItemType } from "../../App.types";

type Props = {
  wishlistItems: WishlistItemType[];
  addToWishlist: (clickedItem: WishlistItemType) => void;
  removeFromWishlist: (id: number) => void;
};

const Wishlist: React.FC<Props> = ({
  wishlistItems,
  addToWishlist,
  removeFromWishlist,
}) => {
  return (
    <Wrapper>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? <p>No items in wishlist</p> : null}
      {wishlistItems.map((item) => (
        <WishlistItem
          key={item.id}
          item={item}
          addToWishlist={addToWishlist}
          removeFromWishlist={removeFromWishlist}
        />
      ))}
    </Wrapper>
  );
};

export default Wishlist;
