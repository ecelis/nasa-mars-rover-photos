import React, { useState } from 'react';
import logo from './favicon-192.png';
import './App.css';
import {
  GlobalStyle,Grid,Row,Col,List,Modal,Carousel
} from './components';
import Photos from './views/Photos';
import { cameras } from './views/Cameras';

function App() {
  const [state, setState] = useState({
    username: null, token: null, photos: [],
    rover: 'curiosity', page: 1, displayLimit: 20,
    selected: '', modal: false
  });

  const handler = async e => {
    e.preventDefault();
    const data = await fetch(`/rover/${state.rover}/${e.target.id}?page=${state.page}`,
    {
      headers: [['Authorization', `Bearer ${state.token}`]]
    });
    const text = await data.text();
    const photos = JSON.parse(text).photos;
    
    setState({
      ...state,
      ...{
        photos: state.displayLimit < photos.length ? photos.slice(0, state.displayLimit) : photos
      },
      ...{selected: e.target.id }
    });
  }

  const photoHandler = e => {
    setState({
      ...state,
      ...{modal: !state.modal }
    });
  }

  const modalHandler = () => {
    setState({
      ...state,
      ...{modal: !state.modal }
    });
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      {state.token
      ?
      <Grid>
        <Modal show={state.modal} handler={modalHandler}>
          <Carousel items={state.photos} />
        </Modal>
        <Row style={{ margin: '1rem'}}>
          <Col size={4} border="none">
            <img src={logo} alt="NASA Logo"
            width={55} height={55} />
          </Col>
        </Row>
        <Row style={{ margin: '1rem'}}>
          <Col size={1} border="none">
            <List items={cameras(handler, state)} />
          </Col>
          <Col size={3} border="none">
            <Photos photos={state.photos} modalHandler={photoHandler} />
          </Col>
        </Row>
      </Grid>
      :
      <Grid>
        <Row style={{ margin: '1rem'}}>
          <Col size={4}>
            <label htmlFor="username">Type username *hint</label>
            <input type="text" placeholder="test"
              onChange={e => setState({...state, ...{username: e.target.value}})}
            />
            <button type="button"
              onClick={async e => {
                e.preventDefault();
                const data = await fetch(`/user/login?username=${state.username}`);
                const token = await data.json();
                setState({...state, ...{token: token}});
              }}
            >Login</button>
          </Col>
        </Row>
      </Grid>}
    </React.Fragment>
  );
}

export default App;
