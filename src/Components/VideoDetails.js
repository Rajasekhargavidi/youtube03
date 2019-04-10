import React from 'react'

const VideoDetails = ({video}) => {
   if(!video){
       return <div>Search something</div>;
   }
   else {

    const embeddedVideo = `https://www.youtube.com/embed/${video.id.videoId || video.id.playlistId || video.id.channelId}`;
        return (
        <div>
            <div className="ui embed">
                <iframe src={embeddedVideo} title={video.id.videoId || video.id.playlistId || video.id.channelId} />
        </div>
        <div className="ui-segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>
      );
        }
    };
    
export default VideoDetails;
