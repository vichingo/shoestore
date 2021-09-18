//components
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

//types
import { WishlistItemType } from "../../App.types";

//styles
import { Wrapper } from "./WishlistItem.styles";

type Props = {
  item: WishlistItemType;
  addToWishlist: (clickedItem: WishlistItemType) => void;
  removeFromWishlist: (id: number) => void;
};

const WishlistItem: React.FC<Props> = ({
  item,
  addToWishlist,
  removeFromWishlist,
}) => {
  const itemTitle = item.brand_name + " " + item.name;

  return (
    <Wrapper>
      <h3>{itemTitle}</h3>
      <div>
        <p>Price: &euro;{item.price.original.toFixed(2)}</p>
        <p>Total: &euro;{(item.amount! * item.price.original).toFixed(2)}</p>
      <ButtonGroup disableElevation variant="contained">
        <Button onClick={() => removeFromWishlist(item.id)} color="primary">
          -
        </Button>
        <Button>{item.amount!}</Button>
        <Button onClick={() => addToWishlist(item)} color="primary">
          +
        </Button>
      </ButtonGroup>
      </div>
    </Wrapper>
  );
};
export default WishlistItem;
