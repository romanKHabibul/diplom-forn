import * as AuthActions from './auth/auth.actions'
import { AuthSlice } from './auth/auth.slice'

export const RootActions = {
    ...AuthActions,
    ...AuthSlice.actions
}