const accessKey = '6nWQl9K1xqskpu3K2lMx5C2DcIaN0QIeI7W9WnJpMAs';

const photosAPI = {
  async getPhotosListRequest() {
    return (response = await fetch(
      `https://api.unsplash.com/photos?page=2&per_page=20&client_id=${accessKey}`,
      {
        'Accept-Version': 'v1',
      },
    ));
  },
};

export default photosAPI;
