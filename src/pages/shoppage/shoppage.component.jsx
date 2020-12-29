import {useState} from 'react';
import SHOP_DATA from './shoppage.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA);

    return (
        <div className="">
            {
                collections
                .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;