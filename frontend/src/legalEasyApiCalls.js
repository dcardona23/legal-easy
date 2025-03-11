const apiUrl = process.env.REACT_APP_BACKEND_API_URL
const backendUrl = `${apiUrl}api/v1/`

export const registerUser = async (userId) => {
  try {
    const response = await fetch(`${backendUrl}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.status}`)
  }
  return await response.json()
  } catch (err) {
    console.error('Error in getUser:', err)
    throw err
  }
}