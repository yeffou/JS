import {createRouter,createWebHistory} from 'vue-router'
import PostList from '../components/PostList.vue';
import PostDetails from '../components/PostDetailsview.vue';
import CreatePost from '../components/CreatePostView.vue';
import EditPost from '../components/EditPost.vue';
import TagCloud from '../components/TagCloud.vue';


const routes = [
  { path: '/posts',name:'PostList', component: PostList },
  { path: '/tag/:tag',name:'TagCloud', component: TagCloud,props : true },
  { path: '/details/:id',name:'PostDetails', component: PostDetails,props:true },
  { path: '/create',name:'CreatePost', component: CreatePost },
  { path: '/edit/:id',name:'EditPost', component: EditPost,props:true },

];


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;


