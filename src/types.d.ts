export interface Msg {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

export interface MsgMutation {
  message: string;
  author: string;
  datetime: string;
}