class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular(videoId) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&id=${videoId}&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();  
    return result.item.map((item) => ({ ...item, id: item.id.videoId }));
    // return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.item.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeFetch;
