import * as React from "react";

interface ComposeBoxProps {
    handleNewMessage: (author: string, body: string) => void;
}

interface ComposeBoxState {
    body: string;
}

class ComposeBox extends React.Component<ComposeBoxProps, ComposeBoxState> {
    constructor(props: ComposeBoxProps) {
        super(props);
        this.state = { body: "" };
    }
    private onBodyChange(e: React.FormEvent<HTMLFormElement>): void {
        this.setState({ body: (e.target as any).value });
    }
    private onSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.props.handleNewMessage("Test Author", this.state.body);
        this.setState({ body: "" });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Compose your message" value={this.state.body} onChange={this.onBodyChange.bind(this)} />
                <input type="submit" value="Send" />
            </form>
        );
    }
}

export default ComposeBox;