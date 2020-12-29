import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.css';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="uppercase title">{title}</h1>
            <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps} />
                ))
            }
            </div>
        </div>
    )
}

export default CollectionPreview;