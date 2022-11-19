import React, {useState} from 'react';
import {Msg} from "../../types";
import {MsgMutation} from "../../types";
import {Form, FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";

interface Props {
 // onSubmit: (msg: Msg) => void;

}

const ChatForm: React.FC<Props> = ({}) => {
  const [msg, setMsg] = useState<MsgMutation>({
    message: '',
    author: '',
    datetime: ''
    })

  //onFormChange
  //onFormSubmit


  return (
    <Form style={{width: '70vw'}}>
      <FormControl type="text" placeholder="username"/>
      <FormControl as="textarea" placeholder="your message" className="mt-1 mb-1"/>
      <Button type="submit" className="btn btn-primary">Send</Button>
    </Form>
  );
};

export default ChatForm;