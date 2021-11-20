import fetch from 'cross-fetch'

type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

async function getUsers(): Promise<User[]> {
  return getFetch('https://jsonplaceholder.typicode.com/users')
}

async function getUserPosts(userId: number): Promise<Post[]> {
  return getFetch('https://jsonplaceholder.typicode.com/posts', {
    userId
  })
}

// Use general form to fetch data, change code base easier
async function getFetch(url: string, params: { [key: string]: any } = {}) {
  const queryString = Object.entries(params)
    .map(param => `${param[0]}=${param[1]}`)
    .join('&')
  return fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json())
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name)
      console.log(posts.length)
    })
  })
})

export {}
