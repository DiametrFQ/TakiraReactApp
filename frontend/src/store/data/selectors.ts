import { AppState } from "..";
import { graph } from "../../types/graph";
import { questDataReducer } from "./reducer";

export const questData = (state: AppState) => {
    const data = JSON.parse(JSON.stringify(state.quest.data)) as {[key: string]: questDataReducer}

    /**
    {
        "nodes": [ 
            { 
                "id": "id1",
                "name": "name1",
            },
            { 
                "id": "id2",
                "name": "name2",
            },
            ...
        ],
        "links": [
            {
                "source": "id1",
                "target": "id2"
            },
            ...
        ]
    } 
    */
    const convert = {nodes: [], links: []}
    Object.entries(data).forEach(([key, value]) => {
        convert.nodes.push({id: key, name: value.name})
        convert.links.push(...value.links.map(link => ({source: key, target: link.target})))
    })
    // data.nodes.map(node => {
    //     const id = node.id
    //     node.id = node.name
    //     node.name = id
    //     return node
    // })
    return JSON.parse(JSON.stringify(convert)) as graph
}

export const clearQuestData = (state: AppState): {[key: string]: questDataReducer} => JSON.parse(JSON.stringify(state.quest.data))