import { useEffect, useState } from 'react'
import ForceGraph2D, { NodeObject } from 'react-force-graph-2d';
// import { CSS2DRenderer, CSS2DObject } from '//unpkg.com/three/examples/jsm/renderers/CSS2DRenderer.js';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuestData } from '../store/data/selectors';
import { addQuestLink, addQuestNode, questDataReducer } from '../store/data/reducer';
import { link, node } from '../types/graph';
import NodeDate from './components/NodeDate';


// const width = 10*5
// const height = 5*2

function MapQuests() {
  const ctxMap = new Map<string | number | undefined, CanvasRenderingContext2D>()
  const [takeId, setTakeId] = useState({id: ''})
  const [focusedId, setFocusedId] = useState('')

  // const data = useSelector(questData)
  const clearData = useSelector(clearQuestData)

  const [graph, setGraphData] = useState<questDataReducer>(clearData)

  useEffect(() => {
    setGraphData(clearData)
  }, [clearData])

  const dispatch = useDispatch()

  const addNode = () => {
    const id = uuidv4()
    const name = `node${graph.nodes.length}`
    setGraphData(({ nodes, links }) => {
      return {
        nodes: [...nodes, { id, name }] as node[],
        links
      };
    });
    dispatch(addQuestNode({ id, name }))
  }
  const addLink = ({ id, trueId }: node) => {
    console.log({id, trueId, takeId})
    if(!id) return new Error('id or trueId is empty')
    if(takeId.id === '') {
      setTakeId({id})
    } 
    else {
      setGraphData(({ nodes, links }) => {
        return {
          nodes,
          links: [...links, { source: takeId.id, target: id }] as link[]
        };
      });
      dispatch(addQuestLink({source: takeId.id, target: id}))
      setTakeId({id: ''})
    }
  }

  const download = () => {
    const str = JSON.stringify(clearData, null, 2);
    const bytes = new TextEncoder().encode(str);  
    const url = window.URL.createObjectURL(new Blob([bytes], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "image.json");
    link.click();
  }
  
  const nodePaint = ({ x, y, id, name }: NodeObject & node, color: string, ctx: CanvasRenderingContext2D) => {
    ctxMap.set(id, ctx)

    if(typeof x !== 'number' || typeof y !== 'number') return new Error('data в говне')
    ctx.fillStyle = color;
    // ctx.fillRect(x - width/4, y - height*0.8, width, height); // rectangle;
    ctx.strokeText(name, x, y);
    ctx.fillText(name, x, y);
  }
  
  return (
    <>
        <div className='graph'>
          <ForceGraph2D
              height={400}
              width={400}
              graphData={graph}
              nodeLabel="id"
              nodeAutoColorBy="group"
              nodeCanvasObject={(node, ctx) => nodePaint(node, 'red', ctx)}
              onNodeClick={(node) => setFocusedId(node.id)}
              onNodeRightClick={(node) => addLink(node)}
              onNodeDragEnd={node => {
              node.fx = node.x;
              node.fy = node.y;
              node.fz = node.z;
              }}

              linkDirectionalArrowLength={3.5}
              linkDirectionalArrowRelPos={1}
              linkCurvature={0.25}
          />
          <div>
              <button onClick={addNode}>ADD NODE</button>
              {/* <button onClick={() => dizspatch(saveData(graphData))}>SAVE</button> */}
              <button onClick={download}>DOWNLOAD</button>

          </div>

          <NodeDate id={focusedId}/>

          {/* <div>
            <pre>{JSON.stringify(clearData, null, 2)}</pre>
          </div> */}
        </div>
    </>
  )
}

export default MapQuests
