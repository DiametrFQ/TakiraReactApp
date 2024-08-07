import { createSlice } from "@reduxjs/toolkit";
import { link } from "../../types/graph";

export type questDataReducer = {
  id: string, 
  name: string,
  links: link[] 
}

const initialState: {data:{[key: string]: questDataReducer}} = {
  data: 
  {
    "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000": {
      "id": "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000",
      "name": "node0",
      "links": []
    }
  },
  
}

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
      addQuestNode(state, {payload}: {payload: {id: string, name: string}}) {
          state.data[payload.id] = { id: payload.id, name: payload.name, links: [] }

      },
      addQuestLink(state, {payload}: {payload: {source: string, target: string, name: string}}) {
        state.data[payload.source].links.push({ title: payload.name, target: payload.target })
      },
      setQuestNodeData(state, {payload}: {payload: {id: string, name?: string, text?: string}}) {
        console.log({payload})
        if(payload.name)
          state.data[payload.id].name = payload.name
        
        // if(!payload.text)
        //   state.data[payload.id]!.text = payload.text
      },
      setFullData(state, {payload}: {payload: {[key: string]: questDataReducer}}) {
        state.data = payload
      }
    }
});

export const { addQuestNode, setQuestNodeData, addQuestLink, setFullData } = dataSlice.actions;
export default dataSlice.reducer;