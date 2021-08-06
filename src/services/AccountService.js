import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async createAccount(account) {
    try {
      const res = await api.post('api/account')
      AppState.account = res.data
      logger.log(res.data)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const accountService = new AccountService()
