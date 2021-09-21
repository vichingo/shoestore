import { useState } from "react";

//custom hooks
import {useLocalStorage} from "./hooks/useLocalStorage";

//data
import * as data from "./data/shoes.json";

//context
import { WishlistContext } from "./stores/WishlistStore";

//compontents
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import Wishlist from "./components/WishList/Wishlist";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";

//types
import { WishlistItemType } from "./App.types";

//styles
import { Wrapper } from "./App.styles";

const App: React.FC = () => {

  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useLocalStorage("wishListItems", [] as WishlistItemType[]);

  const products: WishlistItemType[] = data.products;

  const getTotalItems = (items: WishlistItemType[]) => items.reduce((acc: number, item) => acc + item.amount!, 0);

  const handleAddToWishlist = (clickedItem: WishlistItemType) => {
    
    setWishlistItems(prev => {

      // Item already in the cart
      const isItemOnList = prev.find(item => item.id === clickedItem.id)
      
      // Add to item in cart  
      if (isItemOnList) {
        return prev.map(item => 
          item.id === clickedItem.id ? {...item, amount: item.amount! + 1} : item
        );
      }
      
      // Add new item to the cart
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromWishlist = (id: number) =>{
    setWishlistItems(prev =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount! - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as WishlistItemType[])
    );
  };

  return (
    <Wrapper>
      <WishlistContext.Provider value={{wishlistOpen, setWishlistOpen, wishlistItems}}>
        <Header getTotalItems={getTotalItems}/>
      </WishlistContext.Provider>
      <Drawer anchor="right" open={wishlistOpen} onClose={() => setWishlistOpen(false)}>
        <Wishlist 
          wishlistItems={wishlistItems} 
          addToWishlist={handleAddToWishlist}
          removeFromWishlist={handleRemoveFromWishlist}
          />
      </Drawer>
      <Grid container spacing={2}>
        {products?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToWishlist={handleAddToWishlist} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;

