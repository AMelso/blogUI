import React, {useRef, useState} from 'react'
import {Header, Button, Form} from 'semantic-ui-react'
import Message from '../components/Message';
import axios from "axios";
import { history } from "../helpers"
import {api} from "../api"

// store data in state
// use input ref for image File
// thumbnail is set, needed for form data api
// data is appended to submit to backend
// post form data with content type header to backend endpoint


const PostCreate = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState(null);
  const [markdown, setMarkdown] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)

  const fileInputRef = useRef() // file upload mechanics

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData()
    formData.append("thumbnail", thumbnail)
    formData.append("title", title)
    formData.append("content", markdown)

    axios
    .post(api.posts.create, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Token 1f274b13fd80d8bdafc52847c544df01b556c192"
        }
    })
    .then(res => {
      setLoading(false);
      history.push('/')
      //redirect back to post list
    })
    .catch(err => {
      setLoading(false);
      setError(err.message || err)
    })
  }


  return (
    <div>
      <Header>Create a post</Header>
      {error && (
        <Message danger message={error} />
      )}
      {thumbnail && <Message info message={`Selected image: ${thumbnail.name}`} />}
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input 
              placeholder='Title of your post' 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              />
          </Form.Field>
          <Form.TextArea 
            label='Markdown Content' 
            placeholder='This is your post content.'
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            />
          <Form.Field>
            <Button 
              type="button"
              fluid
              content="Choose a thumbnail" 
              labelPosition="left" 
              icon="file" 
              onClick={() => fileInputRef.current.click()}
              />
            <input ref={fileInputRef} 
            type="file" 
            hidden 
            onChange={e => setThumbnail(e.target.files[0])}
            />
          </Form.Field>
          <Button primary fluid loading={loading} disabled={loading} type='submit'>Submit</Button>
        </Form>
    </div>
  )
}

export default PostCreate;