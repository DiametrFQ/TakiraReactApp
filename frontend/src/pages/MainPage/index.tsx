

import ImgLike from '../components/ImgLike.tsx'
import QuestCard from './components/QuestCard/index.tsx'
import './style.css'

function MainPage() {

  return ( 
    <div className='MainPage'>
      <header className='main-header'>
        <ImgLike width={50} height={50}/>
        <div>отображение</div>
        <div className='view-style'>
          <ImgLike width={50} height={50}/>
          <ImgLike width={50} height={50}/>
        </div>
        <div className='acts'>
          <div>Акт 1</div>
          <div>Акт 2</div>
          <div>Акт 3</div>
        </div>
        <div>Все квесты</div>

      </header>

      <div className='quests'>
        <QuestCard/>
        <QuestCard/>
        <QuestCard/>
      </div>
    </div> 
  )
}

export default MainPage
