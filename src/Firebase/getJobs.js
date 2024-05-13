import { ref } from 'vue'
import { projectFirestore } from './Config'

const getJobs = () => {

  const jobs = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('jobs').get()
      // console.log(res.docs)

      posts.value = res.docs.map(doc => {
        // data are returned without the id, in order to get the id too we need to add it explicitely
        // ... is spread syntaxe
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { jobs, error, load }
}

export default getJobs