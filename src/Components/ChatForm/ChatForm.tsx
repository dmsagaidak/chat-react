import React, {useState} from 'react';
import {Msg} from "../../types";
import {MsgMutation} from "../../types";
import {Form, FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";

interface Props {
 onSubmit: (msg: Msg) => void;

}

const ChatForm: React.FC<Props> = ({onSubmit}) => {
  const [msg, setMsg] = useState<MsgMutation>({
    message: '',
    author: '',
    datetime: ''
    })

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value} = e.target;

    setMsg(prev => ({...prev, [name]: value}))
  }


  const onFormSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    onSubmit({
      ...msg,
      _id: '',
      message: msg.message,
      author: msg.author,
    })
  }


  return (
    <Form style={{width: '70vw'}} onSubmit={onFormSubmit}>
      <FormControl
        id="author"
        as="input"
        name="author"
        type="text"
        placeholder="username"
        value={msg.author}
        onChange={onFormChange}
      />
      <FormControl
        id="message"
        as="textarea"
        name="message"
        placeholder="your message"
        value={msg.message}
        className="mt-1 mb-1"
        onChange={onFormChange}
      />
      <Button type="submit" className="btn btn-primary">Send</Button>
    </Form>
  );
};

export default ChatForm;