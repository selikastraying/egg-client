import React, { Fragment, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function NewPost(props) {
    const [newPost, setNewPost] = useState({title: '',content: ''})
    const handleOnChange = event => {
      const { name, value } = event.target;
      setNewPost({ ...newPost, [name]: value });
    };

    return  <Fragment>
              <Card style={{ height: '100%' }}>
                <Card.Header as="h4">
                  標題：<input name="title" type="text" placeholder="enter Title" onChange={handleOnChange}></input>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <input name="content" type="text" placeholder="enter Content" onChange={handleOnChange} className="w-100 mr-3" ></input>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => props.handleInsert(newPost.title, newPost.content)}>發表</Button>
                </Card.Footer>
              </Card>
            </Fragment>
}

export default NewPost;