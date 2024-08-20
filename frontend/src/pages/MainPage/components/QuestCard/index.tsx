

import { Link } from 'react-router-dom'
import ImgLike from '../../../components/ImgLike.tsx'
import './style.css'


function QuestCard() {

  return ( 
    <div className='QuestCard'>
      <ImgLike width={200} height={100}/>
      <div>Принтер</div>
      <div>Имя</div>
      <div className='btns'>
        <Link to={"/QuestInfo"}>asdasda</Link>
        <ImgLike width={50} height={50}/>
        <ImgLike width={50} height={50}/>
      </div>

    </div> 
  )
}

export default QuestCard
