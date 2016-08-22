import * as React from "react";
import * as ReactDOM from "react-dom";
import Chat from "./Components/Chat";
import MessageModel from "./Models/MessageModel.ts";

var messages: Array<MessageModel> = [
    { author: "Hayden", body: "Hello there!", timeSent: null},
    { author: "Other Hayden", body: "Greetings!", timeSent: null}
];

ReactDOM.render(
    <Chat name="Chat" messages={messages} />,
    document.getElementById("root")
);