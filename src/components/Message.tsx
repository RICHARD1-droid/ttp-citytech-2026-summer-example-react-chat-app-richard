import { faker } from '@faker-js/faker';

const Message = ({text}) => {

    const fake_name = faker.person.fullName();

    return <>
      <p className='message'>
        {text} - {fake_name}
      </p>
    </>;
}

export default Message;