import { BUG_ADD, BUG_DROP, BUG_RESOLVED } from "./actionType"

const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case BUG_ADD:
            return [
                ...state,
                {
                    id: 1,
                    resolved: false,
                    description: action.payload.description 
                }
            ]
        case BUG_DROP:
            return state.filter(bug => bug.id !== action.payload.id)
        case BUG_RESOLVED:
            return state.map(bug => bug.id === action.payload.id ? { ...bug, resolved: true} : bug)
        default:
            return state
    }
}