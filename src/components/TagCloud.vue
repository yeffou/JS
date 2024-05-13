<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" @delete="handleDelete" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { projectFirestore } from '../Firebase/Config';
import SinglePost from '@/components/SinglePost.vue';

export default {
  name: 'TagCloud',
  components: { SinglePost },
  props: ['tag'],
  setup(props) {
    const posts = ref([]);

    // Fetch posts with the selected tag
    const fetchPosts = async () => {
      try {
        const snapshot = await projectFirestore.collection('posts').where('tags', 'array-contains', props.tag).get();
        posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    // Watch for changes in the selected tag and fetch posts accordingly
    watch(() => props.tag, fetchPosts, { immediate: true });

    // Remove post with the given id from the posts array
    const handleDelete = (id) => {
      posts.value = posts.value.filter(post => post.id !== id);
    };

    return {
      posts,
      handleDelete
    };
  }
};
</script>

<style scoped>
</style>
