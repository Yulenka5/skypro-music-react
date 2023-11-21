import { useEffect, useState } from 'react'
import { getTracks } from './Api'
import Bar from './components/Bar/Bar'
import { RoutesApp } from './Routes'

function App() {
  const [trackList, setTrackList] = useState([])
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTracks()
      .then((response) => {
        setTrackList(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
      
  }, [])


  return (
    <>
      <RoutesApp trackList={trackList} setSelectedTrack={setSelectedTrack} error={error}/>
      <Bar selectedTrack={selectedTrack}/>
    </>
  )
}
export default App
