import { createSlice } from "@reduxjs/toolkit";
import { link, node } from "../../types/graph";

export type questDataReducer = {
  nodes: node[], 
  links: link[] 
}

const initialState: {data: questDataReducer} = { 
  data: {
    nodes: [{ id:'11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', name: 'node0'}],
    links: []
  }
}

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
      addQuestNode(state, {payload}: {payload: {id: string, name: string}}) {
          state.data.nodes.push({ id: payload.id, name: payload.name })
      },
      addQuestLink(state, {payload}: {payload: {source: string, target: string}}) {
        state.data.links.push({ source: payload.source, target: payload.target })
      },
      setQuestNodeData(state, {payload}: {payload: {id: string, name?: string, text?: string}}) {
        console.log({payload})
        if(payload.name)
          state.data.nodes.find(n => n.id === payload.id)!.name = payload.name
        
        if(!payload.text)
          state.data.nodes.find(n => n.id === payload.id)!.text = payload.text
      }
    }
});

export const { addQuestNode, setQuestNodeData, addQuestLink } = dataSlice.actions;
export default dataSlice.reducer;