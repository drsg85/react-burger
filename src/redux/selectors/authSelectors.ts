import { TRootState } from 'redux/store'

export const authSelector = (store: TRootState) => store.auth

export const authUserSelector = (store: TRootState) => store.auth.user
