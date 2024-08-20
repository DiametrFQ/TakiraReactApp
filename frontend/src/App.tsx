
import './App.css'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/index.tsx';
import MapQuests from './pages/MapQuest.tsx/index.tsx';
import QuestInfo from './pages/QuestInfo/index.tsx';

// const fetchedData = { nodes: [{ id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' }], links: [] as { source?: string, target?: string }[] }

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/QuestInfo' element={<QuestInfo/>} />
      <Route path='/Map' element={<MapQuests/>} />
    </Routes>
  )
}

export default App
