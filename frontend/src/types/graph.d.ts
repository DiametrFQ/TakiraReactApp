export type node = { id: string, name: string, text?: string}
export type link = { title: string, target: string }
export type graph = { nodes: node[], links: link[] }