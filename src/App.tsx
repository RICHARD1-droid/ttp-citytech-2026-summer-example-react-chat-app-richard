//import
import React from 'react';

const Message = ({text}) => {
    return <>
        <p>
            {text}
        </p>
    </>;
}

const App = () => {
    //
    //business logic
    //
    const messages = [
        "Chinese: 你好，世界！",
        "Spanish: ¡Hola, mundo!",
        "French: Bonjour, le monde!",
    ];

    return <>
        <h1>
            Chatroom
        </h1>

        {
            messages.map((text, index) => (
                <Message key={index} text={text} />
            ))
        }

        <form onSubmit = {(event) => {

            const new_message = event.target.incoming_text
        }



        <input />
        <button>
            Send
        </button>
    </>;
}

export default App;