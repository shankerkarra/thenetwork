import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfileById(id) {
    try {
      const res = await api.get('api/Profiles/:id' + id)
      AppState.account = res.data
      debugger
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

//   //  NEED TO ADD query & ID-Posts
//   GET https://bcw-sandbox.herokuapp.com/api/profiles?query=
//     GET https://bcw-sandbox.herokuapp.com/api/profiles/:id/posts
  //
}

export const profileService = new ProfileService()
