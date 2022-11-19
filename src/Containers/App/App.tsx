import React, {useState, useEffect} from 'react';
import Message from "../../Components/Message/Message";
import ChatForm from "../../Components/ChatForm/ChatForm";
import {Msg} from "../../types";
import 'bootstrap/dist/css/bootstrap.min.css';

const url = ' http://146.185.154.90:8000/messages';

function App() {
  const [messages, setMessages] = useState<Msg[]>([

  ])

  const sendMessage = async () =>{

  }

  useEffect( () => {
    const fetchData = async () =>{
      const response = await fetch(url);

      if (response.ok){
        const messages: Msg[] = await response.json();
        const newMessages = messages.map(message =>({
          ...message,
          _id: message._id,
          message: message.message,
          author: message.author,
          datetime: message.datetime,
        }))
        setMessages(newMessages);
      }
    };
    fetchData().catch(console.error);
  }, [])

  return (
    <div className="App" style={{margin: '20px'}}>
      <ChatForm/>
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
