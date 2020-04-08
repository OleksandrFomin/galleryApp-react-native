const accessKey = '6nWQl9K1xqskpu3K2lMx5C2DcIaN0QIeI7W9WnJpMAs';

const photosAPI = {
  async getPhotosListRequest(pageNum) {
    try {
      return await fetch(
        `https://api.unsplash.com/photos?page=${pageNum}&per_page=40&client_id=${accessKey}`,
        {
          'Accept-Version': 'v1',
        },
      );
    } catch (error) {
      console.log(error);
    }
  },

  async searchedPhotosRequest(queryString, pageNum) {
    try {
      return await fetch(
        `https://api.unsplash.com/search/photos?${pageNum}&per_page=40&query=${queryString}&client_id=${accessKey}`,
        {
          'Accept-Version': 'v1',
        },
      );
    } catch (error) {
      console.log(error);
    }
  },
};

export default photosAPI;
