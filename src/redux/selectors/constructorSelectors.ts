import { TRootState } from 'redux/store'

export const constructorSelector = (store: TRootState) =>
  store.burgerConstructor
