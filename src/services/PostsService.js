import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

//  This Service will be used to display Advt
class PostsService {
  async getAll(query = {}) {
    const res = await api.get('/api/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async createPost(post) {
    const res = await api.post('api/post', post)
    logger.log(res.data)
    AppState.posts = res.data
  }

  async destroy(id) {
    await api.delete('api/post/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}
export const postsService = new PostsService()
