const createUser = `
  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    phone_number)
  VALUES('oluvic@gmail.com',
    'Victor',
    'Oluchukwu',
    'password',
    '08085492459')
  RETURNING *;
  
  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    phone_number)
  VALUES('drvee@epicmail.com',
    'Doctor',
    'Vee',
    '***********',
    '09053969127')
  RETURNING *;

  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    phone_number)
  VALUES('chidinma@gmail.com',
    'Chidinma',
    'Nsoedo',
    'charamie',
    '08081234567')
  RETURNING *;
`;


const createMessage = `
  INSERT INTO messages(sender_id,
    subject,
    message,
    status)
  VALUES('1',
    'Hello Victor',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    'sent')
  RETURNING *;

  INSERT INTO messages(sender_id,
    subject,
    message)
  VALUES('2',
    'Hello Chidinma',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
  RETURNING *;

  INSERT INTO messages(sender_id,
    subject,
    message,
    status)
  VALUES('2',
    'Charamie Designs',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    'read')
  RETURNING *;
`;

const createSeedsQuery = `${createUser}${createMessage}`;

export default createSeedsQuery;
