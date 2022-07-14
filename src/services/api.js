function fetchImage(url) {
  return fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(new Error("Sorry"))
    })
  
}

export default fetchImage ;
