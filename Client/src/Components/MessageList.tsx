import * as React from "react";
import MessageModel from "../Models/MessageModel";

interface MessageListProps {
    messages?: Array<MessageModel>;
}

class MessageList extends React.Component<MessageListProps, {}> {
    render() {
        return (
            <ul>
                {this.props.messages.map((m) => <li>{m.author}: {m.body}</li>)}
            </ul>
        );
    }
}

export default MessageList;