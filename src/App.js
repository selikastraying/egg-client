import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Post from './components/post.jsx'
import NewPost from './components/newPost.jsx'
import apiClient from './services/NetServices';

function App() {
  const [posts, setPosts] = useState([])
  const fetchPost = () => {
    apiClient.get().then((res) => {
      setPosts(res.data)
    })
  }
  const deletePost = (_id) => {
    apiClient.delete(`${_id}`).then(() => {
      fetchPost()
    })
  }
  const updatePost = (_id, title, content) => {
    const data = {}
    data['title'] = title
    data['content'] = content
    apiClient.put(`${_id}`, data).then(() => {
      fetchPost()
    })
  }
  const insertPost = (title, content) => {
    const data = {}
    data['title'] = title
    data['content'] = content
    apiClient.post('', data).then(() => {
      fetchPost()
    })
  }
  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="App pt-5">
        <Navbar fixed="top" bg="light" expand="lg">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand href="#">留言板</Navbar.Brand>
        </Navbar>
        <div className="h-100 w-100">
          <div className="bg overflow-auto noscrollbar h-75 py-3">
            {
              posts.map((post) => 
                <Post key={post._id}
                      post={post} 
                      handleDelete={
                        (_id) => {
                          deletePost(_id)
                        }
                      }
                      handleUpdate={
                        (_id, title, content) => {
                          updatePost(_id, title, content)
                        }
                      }>
                </Post>)
            }
          </div>
          <div className="h-25">
            <NewPost handleInsert={
                (title, content) => {
                  insertPost(title, content)
                }
              }>
            </NewPost>
          </div>
        </div>
    </div>
  );
}

export default App;
