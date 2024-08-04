import { useDispatch, useSelector } from "react-redux"
import { clearQuestData } from "../../store/data/selectors"
import { setQuestNodeData } from "../../store/data/reducer"

function NodeDate({id}: {id: string}) {
    const dispatch = useDispatch()
    const clearData = useSelector(clearQuestData)
    const node = clearData.nodes.find(n => n.id === id)
    

    const setName = (name: string) => {
        dispatch(setQuestNodeData({id, name}))
        console.log({id, name})
    }

    return (
        <div>
            {/* {id &&<div className="NodeDate">{id}</div>} */}
            <input type="text" placeholder="name" value={node?.name} onChange={(e) => setName(e.target.value)}/>
        </div>

    )
}

export default NodeDate
