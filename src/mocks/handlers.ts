import { rest } from 'msw'
import {
  IN_CHAT_MESSAGE_SUCCESS,
  IN_CHAT_USERS_SUCCESS,
  LOGGED_USER_SUCCESS,
} from './resolvers'

const LOCAL_BASE_URL = 'http://localhost:9000'

export const handlers = [
  rest.get(`${LOCAL_BASE_URL}/logged_user'`, LOGGED_USER_SUCCESS),
  rest.get(`${LOCAL_BASE_URL}/users`, IN_CHAT_USERS_SUCCESS),
  rest.get(`${LOCAL_BASE_URL}/messages`, IN_CHAT_MESSAGE_SUCCESS),
]
