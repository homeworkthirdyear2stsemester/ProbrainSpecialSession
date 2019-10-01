import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    return (//유저가 클릭할떄 onVideoSelect를 호출하여 해당리스트의 video를 전달
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}></img>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
