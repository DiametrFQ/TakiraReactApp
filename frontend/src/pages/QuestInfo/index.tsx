import { Link } from 'react-router-dom'
import './style.css'

function QuestInfo() {

  return ( 
    <div className='QuestInfo'>
      <header className='header'>
        <div>К списку квестов</div>
        <div>Общая информация</div>
        <div>Условия получения</div>
        <div>Используемые флаги</div>
        <Link to={"/Map"}>К списку квестов</Link>
        <div>Карта квеста</div>
        <div>Экспорт в Realmnauts</div>
      </header>

      <div className='quests'>

      </div>
    </div> 
  )
}

export default QuestInfo
