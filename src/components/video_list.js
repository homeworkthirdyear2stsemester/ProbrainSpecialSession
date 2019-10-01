import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {


    const videoItem = props.videos.map((video) => {
        return (<VideoListItem
                onVideoSelect={props.onVideoSelect} // app으로부터 가져온 prop을 비디오 리스트 아이템으로 전달
                key={video.etag}
                video={video}/>
        );
    });


    return (
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    )
};


export default VideoList;