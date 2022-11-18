import React from 'react';
import {Msg} from "../../types";
import {Card} from "react-bootstrap";

interface Props {
  msg: Msg;
}

const Message: React.FC<Props> = ({msg}) => {
  return (
    <Card className="mt-2 p-2" style={{width: '70vw'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <p style={{paddingRight: '30px'}}><b>Author: </b>{msg.author}</p> <p><b>Time & date: </b>{msg.datetime}</p>
      </div>
      <Card.Text>
        {msg.message}
      </Card.Text>
    </Card>
  );
};

export default Message;