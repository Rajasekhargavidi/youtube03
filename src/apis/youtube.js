import axios from 'axios';
const KEY = "AIzaSyBMTB3uNoHGv4IUod51EYDcLckf1VRX7Is";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:10,
        key:KEY
    }
})