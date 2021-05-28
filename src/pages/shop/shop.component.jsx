import React from "react";
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

import SHOP_DATA from './shopData';

class ShopPage extends React.Component{
   constructor(){
       super();
       this.state={
           collections: SHOP_DATA
       }
   }
  
  render(){
    const {collections} = this.state;
      return(
          <div className="shop_data">
              {collections.map(({id, ...otherCollectionProps})=>
                <CollectionPreview key={id}  {...otherCollectionProps} />  
              )}
          </div>
      )
  }

}
export default ShopPage;

