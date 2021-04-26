import React from 'react';
import styles from './videoList.module.css';
import VideoItem from '../video_item/videoItem';


const VideoList = ({ videos, onVideoClick, display }) => (
    <ul className={styles.videos}>
        {videos.map(video => (
        <VideoItem 
            key={video.id} 
            video={video} 
            onVideoClick={onVideoClick}
            display={display}    
        />))}
    </ul>
)

export default VideoList;