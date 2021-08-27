const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:8000" : "https://domain.com"

export const api = {
  posts: {
    list: `${baseURL}/posts/`,
    retrieve: slug => `${baseURL}/posts/${slug}`,
    create: `${baseURL}/posts/create/`,
    update: slug => `${baseURL}/posts/${slug}/update/`,
  }
}