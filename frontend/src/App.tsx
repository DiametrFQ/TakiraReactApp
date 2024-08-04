
import './App.css'
import { Route, Routes } from 'react-router-dom';
import MapQuests from './pages/MapQuests';

// const fetchedData = { nodes: [{ id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' }], links: [] as { source?: string, target?: string }[] }

function App() {

  return (
    <Routes>
      <Route path='/' element={<MapQuests/>} />
    </Routes>
  )
}

export default App
