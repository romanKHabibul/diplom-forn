import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore, FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE} from 'redux-persist'
import {configureStore} from '@reduxjs/toolkit'
import { RootReducer } from './root.reducer'
import { api } from './api/api'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE]
        }
    }).concat(api.middleware)
})

export const persistor = persistStore(store)
export type StoreState = ReturnType<typeof store.getState>
export const useSelect: TypedUseSelectorHook<StoreState> = useSelector