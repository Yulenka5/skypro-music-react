import { useEffect, useState } from 'react'
import { getTracks } from './Api'
import Bar from './components/Bar/Bar'
import { RoutesApp } from './Routes'

function App() {
  const [trackList, setTrackList] = useState([])
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getTracks()
      .then((response) => {
        setTrackList(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <RoutesApp
        trackList={trackList}
        setSelectedTrack={setSelectedTrack}
        error={error}
        isLoading={isLoading}
      />
      {selectedTrack && (
        <Bar selectedTrack={selectedTrack} isLoading={isLoading} />
      )}
    </>
  )
}
export default App
