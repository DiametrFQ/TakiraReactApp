import { AppState } from "..";
import { mapData } from "../../types/mapData";
import data2graph from "../../utils/data2graph";
import shallowCopy from "../../utils/shallowCopy";

export const questData = (state: AppState) => {
    const data = shallowCopy(state.quest.data) as mapData
    return data2graph(data)
}

export const clearQuestData = (state: AppState): mapData => shallowCopy(state.quest.data)