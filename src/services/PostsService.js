import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

//  This Service will be used to display Advt
class PostsService {
  async getAll() {
    const res = await api.get('/api/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async getPostByQuery(query = {}) {
    const res = await api.get('/api/posts' + query)
    logger.log(res.data)
    AppState.posts = res.data
  }
  async getPostByPage(page = {}) {
    const res = await api.get('/api/posts' + page)
    logger.log(res.data)
    AppState.posts = res.data
  }

  async getPostById(id) {
    const res = await api.get('/api/posts/:id' + id)
    logger.log(res.data)
    AppState.posts = res.data
  }
  async createPost(post) {
    const res = await api.post('api/post', post)
    logger.log(res.data)
    await this.getAll()
  }

  async updatePost(post) {
    const res = await api.post('api/post/:id', post)
    logger.log(res.data)
    AppState.posts = res.data
  }

  async updatePostbyLike(post) {
    const res = await api.post('api/post/:id', post + 'like')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async destroy(id) {
    await api.delete('api/post/' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}
export const postsService = new PostsService()
