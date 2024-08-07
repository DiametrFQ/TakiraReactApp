export type mapDataLink = { title: string, target: string }
export type questData = {
    id: string, 
    name: string,
    links: mapDataLink[] 
}
export type mapData = {
    [key: string]: questData
}
