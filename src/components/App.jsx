// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery';
import { useEffect, useState } from 'react';
import { getPictures } from './Api';
import { Button } from './Button';
import { Loader } from './Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      getPictures(query, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            console.log('No images were found');
            return;
          }

          const isLastPage = Math.ceil(totalHits / 12) === page;

          setShowBtn(!isLastPage);
          setPhotos(prevState => [...prevState, ...hits]);
        })
        .catch(error => console.log(error.message))
        .finally(() => setLoading(false));
    }
  }, [query, page]);

  const onSubmit = query => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery photos={photos} />
      {showBtn && <Button onNextPage={onLoadMore} />}
      {loading && <Loader />}
    </div>
  );
};
