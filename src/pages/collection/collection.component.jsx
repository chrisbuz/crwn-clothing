import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({
  match: {
    params: { collectionId }
  }
}) => (
  <div className='collection-page'>
    <h2>Category {`${collectionId}`}</h2>
  </div>
);

export default CollectionPage;
