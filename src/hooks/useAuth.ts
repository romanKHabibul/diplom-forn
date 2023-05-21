import { useSelect } from "../redux/store"

export const useAuth = () => {
    return useSelect(state => state.auth)
}