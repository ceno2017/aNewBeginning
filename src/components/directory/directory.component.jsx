import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {dSelector} from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory= ({differentSections})=>{
 
      return(
        <div className="directory-menu">
         {differentSections.map(({id,...otherProps})=>(
           <MenuItem key={id} {...otherProps} />
         ))} 
        </div>
      ) 
         }
const mapStateToProps = createStructuredSelector({
  differentSections: dSelector
});
export default connect(mapStateToProps)(Directory);