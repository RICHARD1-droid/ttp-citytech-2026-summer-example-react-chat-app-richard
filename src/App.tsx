import {useState} from 'react';
import Message from './components/Message';
// @ts-ignore
import './App.css';



const App = () => {
   

    interface MessageData {
    text: string;
    timestamp: string;
}

const [messages, setMessages] = useState<MessageData[]>([]);

const clearMessages = () => {
    setMessages([]);
};

    return <>
        <h1>
            Chat room
        </h1>


        {
            messages.map(
                (message, index) => (
                <Message 
                    key={index} 
                    text={message.text}
                  
                    timestamp={message.timestamp}
                     />
                )
            )
        }
    

        <form onSubmit={(event) => {
            event.preventDefault();

            // determine what the new message is
            const new_message = event.target.incoming_text.value;

            // add the new message to the message state
        
            setMessages([
                ...messages,
                {
                text: new_message,
                timestamp: new Date().toLocaleTimeString()
                },
            ]);

            // note: this is not best practice in react but it works for now
            const input = document.getElementById('incoming_text') as HTMLInputElement | null;
            if (input) {
                input.value = '';
            }
        }}>
        <input name='incoming_text' id='incoming_text' />
        <button type='submit'>
            send
        </button>
        </form>
         <button 

        type="button"
        className="clear-button"
        onClick={clearMessages}
        >
            Clear Messages
        </button>
    </>;
}

export default App;