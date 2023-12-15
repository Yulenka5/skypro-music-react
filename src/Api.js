import axios from 'axios'

export function getTracks() {
  return axios.get('https://skypro-music-api.skyeng.tech/catalog/track/all/')
}

export function registrUser({ email, password }) {
  return (
    axios.post('https://skypro-music-api.skyeng.tech/user/signup/', {
      email: email,
      password: password,
      username: email,
    }),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}

export function loginUser({ email, password }) {
  return (
    axios.post('https://skypro-music-api.skyeng.tech/user/login/', {
      email: email,
      password: password,
    }),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}

export function getToken({ email, password }) {
  return (
    axios.post('https://skypro-music-api.skyeng.tech/user/token/', {
      email: email,
      password: password,
    }),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
