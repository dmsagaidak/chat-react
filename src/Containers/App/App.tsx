import React, {useState, useEffect} from 'react';
import Message from "../../Components/Message/Message";
import {Msg} from "../../types";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [messages, setMessages] = useState<Msg[]>([
    {_id: "636cfdf6279b80069c7201b0", message: "dsad", author: "czcx", datetime: "2022-11-10T13:34:46.498Z"},
    {_id: "636cfdf6279b80069c7sdfs0", message: "fff", author: "zzz", datetime: "2022-11-11T13:34:46.498Z"},
  ])

  return (
    <div className="App" style={{margin: '20px'}}>
      <p>Test</p>
      <>
        {messages.map((message) =>(
          <Message
            key={message._id}
            msg={message}/>
        ))}
      </>
    </div>
  );
}

export default App;
