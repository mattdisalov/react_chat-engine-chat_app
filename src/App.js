import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import ChatSettingsTop from './components/ChatSettingsTop';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="3c176af2-e0f3-45aa-94ca-754dc9e1d3ed"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            renderChatSettingsTop={(creds, chat) => <ChatSettingsTop {...(creds, chat)} />}
        />
    )
};

export default App;