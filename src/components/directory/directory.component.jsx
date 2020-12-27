import { useState } from "react"
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";

const Directory = () => {
    const [images] = useState([...sections]);

    return (
        <div className="w-full md:max-w-7xl md:flex md:flex-wrap md:justify-between">
            {images.map(({ title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
        </div>
    )
}

export default Directory;