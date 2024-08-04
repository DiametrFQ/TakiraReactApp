import { AppState } from "..";
import { questDataReducer } from "./reducer";

export const questData = (state: AppState) => {
    const data = JSON.parse(JSON.stringify(state.quest.data)) as questDataReducer
    data.nodes.map(node => {
        const id = node.id
        node.trueId = id
        node.id = node.name
        return node
    })
    return JSON.parse(JSON.stringify(data)) as questDataReducer
}

export const clearQuestData = (state: AppState): questDataReducer => JSON.parse(JSON.stringify(state.quest.data))