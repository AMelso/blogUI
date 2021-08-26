import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Divider, Image, Item, Header} from 'semantic-ui-react'
import Loader from '../components/Loader';
import Message from '../components/Message'

const PostList = () => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:8000/posts/');
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
                <Item.Header as='a'>{post.title}</Item.Header>
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