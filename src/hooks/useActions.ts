import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { RootActions } from "../redux/root.action"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(RootActions, dispatch)
}