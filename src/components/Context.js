import React from 'react';

const UserContext = React.createContext('');

function App() {
  return (
    <div>
      <UserContext.Provider value="mike">
        <div>상단메뉴</div>
        <Profile />
        <div>하단메뉴</div>
      </UserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

function Greeting() {
  return (
    <UserContext.Consumer>{username => <p>{`${username}님 안녕하세요`}</p>}</UserContext.Consumer>
  );
}

export default App;
