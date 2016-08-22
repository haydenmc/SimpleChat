import * as React from "react";
import MessageModel from "../Models/MessageModel";
import MessageList from "./MessageList";
import ComposeBox from "./ComposeBox";

interface ChatProps {
    name: string;
    messages?: Array<MessageModel>;
}

interface ChatState {
    messages: Array<MessageModel>;
}

class Chat extends React.Component<ChatProps, ChatState> {
    constructor(props: ChatProps) {
        super(props);
        this.state = { messages: [ {author: "Hi", body: "There", timeSent: null}] };
    }
    handleNewMessage(author: string, body: string): void {
        var newMessage: MessageModel = { author: author, body: body, timeSent: new Date() };
        this.setState({ messages: this.state.messages.concat(newMessage) });
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <MessageList messages={this.state.messages} />
                <ComposeBox handleNewMessage={this.handleNewMessage.bind(this)} />
            </div>
        );
    }
}

export default Chat;