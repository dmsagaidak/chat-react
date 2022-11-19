import React, {useState, useEffect} from 'react';
import Message from "../../Components/Message/Message";
import ChatForm from "../../Components/ChatForm/ChatForm";
import {Msg} from "../../types";
import 'bootstrap/dist/css/bootstrap.min.css';


const url = ' http://146.185.154.90:8000/messages';

function App() {
  const [messages, setMessages] = useState<Msg[]>([
  ]);



  const sendMessage = async (msg: Msg) =>{
    setMessages(prev => [...prev, msg]);
    console.log(msg);
    try{
      const body = new URLSearchParams();
      body.append('author', msg.author);
      body.append('message', msg.message);
      await fetch(url, {method: 'POST', body});
    }catch (e) {
      console.log(e)
    }
  }

  useEffect( () => {
    const fetchData = async () =>{
      const response = await fetch(url);

      if (response.ok){
        const messages: Msg[] = await response.json();
        const date = messages[messages.length - 1].datetime;
        let dateUrl = `${url}?datetime=${date}`
        let newMessages = messages.map(message =>({
          ...message,
          _id: message._id,
          message: message.message,
          author: message.author,
          datetime: message.datetime,
        }))
        setMessages(newMessages);

        setInterval(async () =>{
          const response = await fetch(dateUrl);
          const newMsgData: Msg[] = await response.json();

          if(newMsgData.length){
            const lastDate = newMsgData[newMsgData.length - 1].datetime;
            dateUrl = `${url}?datetime=${lastDate}`;
            newMessages= newMsgData.map(message =>({
              ...message,
              _id: message._id,
              message: message.message,
              author: message.author,
              datetime: message.datetime,
            }))
          }
        }, 2000)
      }
    };
    fetchData().catch(console.error);
  }, [])


  return (
    <div className="App" style={{padding: '20px', background: '#aeeeae'}}>
      <ChatForm
      onSubmit={sendMessage}
      />
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
