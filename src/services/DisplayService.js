import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

//  This Service will be used to display Advt
class DisplayService {
  async getAll(query = {}) {
    const res = await api.get('/api/ads')
    logger.log(res.data)
    AppState.bloggrs = res.data
  }
}

export const displayService = new DisplayService()
