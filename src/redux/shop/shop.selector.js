import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

export const sSelector = state=>state.shopData;

// const COLLECTION_ID_MAP =
// {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

export const shopSelector = createSelector(
    [sSelector],
    shopData=>shopData.myShopData
)
//memoize from lodash used to memoize a function so it ownt rerun when given the same url params

export const selectCollection = memoize((collectionUrlParam)=>createSelector(
    [shopSelector],
    myShopData=>myShopData[collectionUrlParam]
)
);

//we get all the keys of that object and map over those keys to get all the values for each of those keys forming a new array
export const shopSelectorForPreview = createSelector(
    [shopSelector],
    myShopData => Object.keys(myShopData).map(key=>myShopData[key])
)


