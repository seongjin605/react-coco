import React, { useState } from 'react';

const UserContext = React.createContext('');

function App() {
  const [username, setUsername] = useState('');
  const inputRef = React.createRef();
  console.log('inputRef:', inputRef);
  return (
    <div>
      <UserContext.Provider value={username}>
        <Profile />
      </UserContext.Provider>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        ref={inputRef}
      ></input>
      <button onClick={() => inputRef.current.focus()}>포커스</button>
    </div>
  );
}

const Profile = React.memo(() => {
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  return (
    <UserContext.Consumer>{username => <p>{`${username}님 안녕하세요`}</p>}</UserContext.Consumer>
  );
}

export default App;
