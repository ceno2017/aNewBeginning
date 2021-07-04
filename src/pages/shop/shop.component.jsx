import React from "react";

import {Route} from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import collectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({match})=>
      (
          <div className="shop_data">
              <Route exact path={`${match.path}`} component={collectionsOverviewComponent} />
              <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
          </div>
      )


export default ShopPage;

