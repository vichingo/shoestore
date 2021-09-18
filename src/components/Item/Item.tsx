import Button from "@material-ui/core/Button";

//types
import { WishlistItemType } from "../../App.types";

//styles
import { Wrapper, BrandName, Name, Price } from "./Item.styles";

type Props = {
  item: WishlistItemType;
  handleAddToWishlist: (clickedItem: WishlistItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToWishlist }) => {
  const itemTitle = item.brand_name + " " + item.name;

  return (
    <Wrapper>
      <img src={item.image} alt={itemTitle} />
      <div>
        <BrandName>{item.brand_name}</BrandName>
        <Name>{item.name}</Name>
        <Price>&euro;{item.price.original}</Price>
      </div>
      <Button onClick={() => handleAddToWishlist(item)}>Add to Wishlist</Button>
    </Wrapper>
  );
};

export default Item;
