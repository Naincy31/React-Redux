import { BUG_ADD, BUG_DROP, BUG_RESOLVED } from "./actionType";

export const bugAdd = (description) => {
    return {
        type: BUG_ADD,
        payload: {
            description
        }
    }
}

export const bugDrop = (id) => {
    return {
        type: BUG_DROP,
        payload: {
            id
        }
    }
}

export const bugResolved = (id) => {
    return {
        type: BUG_RESOLVED,
        payload: {
            id
        }
    }
}