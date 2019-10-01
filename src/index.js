import _ from 'lodash'
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/serch_bar'  //해당 컴포넌트를 가졍모
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import {API_KEY} from './api/api-key';


class App extends Component { //const =es6
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }


    videoSearch(term) {
        YTSearch({key: API_KEY, term: term},
            (videos) => {
                this.setState({
                    videos: videos, //변경
                    selectedVideo: videos[0] //변경
                })
            }
        );
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <div>
                <SearchBar onSerchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.querySelector('.container'));
