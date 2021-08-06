import axios from 'axios'

const KEY="AIzaSyB_WgMHHSsvB_Ub8uqjDs1iUTN_Yd17rM8";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
        
    }
})

