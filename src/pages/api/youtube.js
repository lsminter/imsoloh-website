import fetch from 'isomorphic-unfetch'

export default async function handler(req, res) {
  const { API_KEY, CHANNEL_ID } = process.env
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
  )
  const data = await response.json()
  res.json(data)
}