import axios from 'axios';

class FriendsService {
    constructor (){
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
    }

    followFriend = (friendId) =>{
        return this.app.post(`/api/user/follow/${friendId}`)
    }

    unfollowFriend = (friendId) =>{
        return this.app.post (`/api/user/unfollow/${friendId}`)
    }
    
    checkIfFollowing = (friendId) =>{
        return this.app.get(`/api/user/checkfollowing/${friendId}`)
    }

    searchNewFriends = () => {
        return this.app.get(`/api/user/search/users`)
    }

    getAllFriends = () => {
        return this.app.get('/api/user/friends')
    }
}

const FriendService = new FriendsService();

export default FriendService;