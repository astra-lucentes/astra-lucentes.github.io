import './Image.css'
import {default as _Image} from "next/image"

const Image = ({image, src, width, height, alt}) => {
    if (image) {
        src = image.src
        width = image.width
        height = image.height
    }

    return <div className="image"><_Image src={src} width={width} height={height} alt={alt} /></div>
}

export default Image