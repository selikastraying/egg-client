import React, { Fragment, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function Post(props) {
    const [newPost, setNewPost] = useState({title: props.post.title,content: props.post.content})
    const handleOnChange = event => {
      const { name, value } = event.target;
      setNewPost({ ...newPost, [name]: value });
    };
    const [isUpdating, setIsUpdating] = useState(false) 

    return  <Fragment>
            {
            isUpdating?
              <Card>
                <Card.Header as="h4">
                  <input name="title" type="text" placeholder="enter Title" defaultValue={props.post.title} onChange={handleOnChange}></input>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <input name="content" type="text" placeholder="enter Content" defaultValue={props.post.content} onChange={handleOnChange} className="w-100 mr-3"></input>
                  </Card.Text>
                  <Button className="mr-3" onClick={() => {props.handleUpdate(props.post._id, newPost.title, newPost.content);setIsUpdating(!isUpdating);}} disabled={newPost.title === '' || newPost.content === ''}>確定</Button>
                  <Button onClick={() => setIsUpdating(!isUpdating)}>取消</Button>
                </Card.Body>
              </Card>
            :
              <Card>
                <Card.Header as="h4">{props.post.title}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {props.post.content}
                  </Card.Text>
                  <Button className="mr-3" onClick={() => setIsUpdating(!isUpdating)}>修改</Button>
                  <Button onClick={() => {props.handleDelete(props.post._id)}}>刪除</Button>
                </Card.Body>
              </Card>
            }
            </Fragment>
            
}

export default Post;