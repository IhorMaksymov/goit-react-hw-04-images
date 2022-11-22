import PropTypes from 'prop-types';

import { Box } from 'components/Box/Box';
import { GalleryList } from './ImageGalleryStyled';
import ImageGalleryItem from './ImageGalleryItem';

const ItemGallery = ({ items }) => {
    return (
        <Box
            pt={5}
            width='1330px'
        >
            <GalleryList>
                {items.map(({ id, webformatURL, largeImageURL, tags }) => 
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />
                )}
            </GalleryList>
        </Box>
    )
}

export default ItemGallery;

ItemGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    )
}