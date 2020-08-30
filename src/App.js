import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TodoList from './TodoList';
import { StaticButton } from './components/StaticButton';
import { DynamicBox } from './components/DynamicBox';
import Rooms from './components/Rooms';
import Like from './components/Like';
import Priority from './components/Priority';
// import Hook from './components/Hook';
import Context from './components/Context';

// import { startTimer } from './components/UpdateSeconds';
//startTimer();

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, bordeor: '5px solid gray' }}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Route exact path="/" component={Home} />
        <Route path="/photo" component={Photo} />
        <Route path="/rooms" component={Rooms} />
      </div>
      <TodoList />
      <StaticButton size="small">page1</StaticButton>
      <DynamicBox size="big">page2</DynamicBox>
      <Like />
      <Priority title="리액트 스터디" desc="실전 리액트 프로그래밍" />
      {/* <Hook hello="kk" /> */}
      {/* <UpdateSeconds /> */}
      <Context />
    </BrowserRouter>
  );
}

function Home({ match }) {
  return <h2>이곳은 홈페이지입니다.</h2>;
}

function Photo({ match }) {
  return <h2>여기서 사진을 감상하세요.</h2>;
}
