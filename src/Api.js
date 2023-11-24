import axios from 'axios'

export function getTracks() {
  return axios.get('https://skypro-music-api.skyeng.tech/catalog/track/all/')
}
