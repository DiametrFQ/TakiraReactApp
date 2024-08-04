export type node = { id: string, name: string, text?: string, trueId?: string}
export type link = { source: string, target: string }
export type graph = { nodes: node[], links: link[] }