import axios from 'axios';

const KEY='AIzaSyC8k4ht0VKN8e2BzzSfn3x224_Z90tbTrI';

export default axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3",
    params:
    {
        part:'snippet',
        maxResults:5,
        key:KEY
    }



});