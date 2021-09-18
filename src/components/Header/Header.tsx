import { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Badge from "@material-ui/core/Badge";

// styles
import { Logo } from "./Header.styles";

//context
import { WishlistContext } from "../../stores/WishlistStore";

//types
import { WishlistItemType } from "../../App.types";

type Props = {
  getTotalItems: (Items: WishlistItemType[]) => number;
};

const Header: React.FC<Props> = ({ getTotalItems }) => {
  const { setWishlistOpen, wishlistItems } = useContext(WishlistContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo variant="h5">Allegiant Shoes</Logo>
        <IconButton onClick={() => setWishlistOpen(true)} color="inherit">
          <Badge
            badgeContent={getTotalItems(wishlistItems)}
            color="error"
            showZero
          >
            <FavoriteBorderIcon color="inherit" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
