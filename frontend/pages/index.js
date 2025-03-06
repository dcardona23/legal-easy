import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then((response) => response.json())
    .then((data) => setData(data))
  }, [])

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringiify(data, null, 2)}</pre>
    </div>
  )
}