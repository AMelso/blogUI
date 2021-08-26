import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {Divider,Item, Header} from 'semantic-ui-react'
import Loader from '../components/Loader';
import Message from '../components/Message'
import {api} from "../api"

const PostList = () => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(api.posts.list);
        setPosts(res.data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }

    }
    fetchData()
  }, [])


  return (
    <div>
      <Header>Post List</Header>
      <Divider/>
      {error && <Message negative message={error} />}
      {loading && <Loader />}
      <Item.Group>
        {posts?.map(post=> {
          return (
            <Item key={post.id}>
              <Item.Image size='small' src={post.thumbnail} />
              <Item.Content>
                <NavLink to={`/posts/${post.slug}`}>
                  <Item.Header as='h3'>{post.title}</Item.Header>
                </NavLink>
                <Item.Description>{post.Content}</Item.Description>
              </Item.Content>
            </Item>
          )
        })}
      </Item.Group>
    </div>
  )
}

export default PostList;