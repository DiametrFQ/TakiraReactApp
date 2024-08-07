import { graph } from "../types/graph"
import { mapData } from "../types/mapData"

export default function data2graph(data: mapData) {
    const convert: graph = { nodes: [], links: [] }

    for (const key in data) {
        convert.nodes.push({id: key, name: data[key].name})
        convert.links.push(...data[key].links.map((link) => ({source: key, target: link.target})))
    }

    return convert
}