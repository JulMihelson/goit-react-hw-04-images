// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';
import { getPictures } from './Api';
import { Button } from './Button';
import { Loader } from './Loader';
export class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    showBtn: false,
    loading: false,
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });
      getPictures(query, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            console.log('No images were found');
            return;
          }
          const isLastPage = Math.ceil(totalHits / 12) === page;

          this.setState(prevState => ({
            showBtn: !isLastPage,
            photos: [...prevState.photos, ...hits],
          }));
        })
        .catch(error => console.log(error.message))
        .finally(() => this.setState({ loading: false }));
    }
  }
  onSubmit = query => {
    this.setState({ query, photos: [], page: 1 });
  };
  render() {
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
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery photos={this.state.photos} />
        {this.state.showBtn && <Button onNextPage={this.onLoadMore} />}
        {this.state.loading && <Loader />}
      </div>
    );
  }
}
