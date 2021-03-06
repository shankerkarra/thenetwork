import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class DisplayService {
  async getAll(query = {}) {
    const res = await api.get('/api/ads')
    logger.log(res.data)
    AppState.displays = res.data
  }
}

export const displayService = new DisplayService()
