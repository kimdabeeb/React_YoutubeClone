import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import Search from './components/search/search';
import VideoDetail from './components/video_detail/videoDetail';
import VideoList from './components/video_list/videoList';
import SideMenu from './components/side_menu/side_menu';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  /* 이전상태 : 상태업데이트!! 
    개발도구 component : 계속되는 렌더링때문에 useCallback 사용하여 [] 한번만 리렌더링, search memo 써줬으나 효과가 없었음 */
  const search = useCallback(
    query => {
      setSelectedVideo(null) 
      youtube
      .search(query) //
      .then(videos =>
        setVideos(videos)
        // setSelectedVideo(null) 
      );
    }, [youtube]);

  useEffect(() => {
    youtube.mostPopular() //
    .then(videos => setVideos(videos));
  }, [youtube]);


  return (
    <div className={styles.app}>
        <Search onSearch={search} /> 
      <section className={styles.content}>
        <SideMenu /> 
        {selectedVideo && (
        <div className={styles.detail}>
          {/* selectedVideo 선택된 비디오가 있다면, VideoDetail의 컴포넌트를 이용해서 비디오(video)를 전달해줄 것이다 selectedVideo를 */}
          <VideoDetail video={selectedVideo} /> 
        </div>
        )}
        <div className={styles.list}>
          {/* display : onVideoClick 비디오가 셀렉티드되어 들어가면 자체적으로 꾸며줄 수 없으니 props 만들어서 list => 있다면 list/ 아니면 두줄 grid 형태로 보여준다 */}
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
