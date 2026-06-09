import { useState } from 'react';
import { faker } from '@faker-js/faker';

const Message = ({text, timestamp}) => {



    const [fake_name] = useState(faker.person.fullName());

    return (
      <p className='message'>
        
        <span className='message-text'> "{text}"</span>
        <span className='message-name'> - {fake_name}</span>
        <span className='message-time'> - ({timestamp})</span>
      </p>
    
    );
}

export default Message;