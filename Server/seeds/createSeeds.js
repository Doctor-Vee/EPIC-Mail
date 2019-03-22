const createUsers = `
  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    phone_number)
  VALUES('osc@gmail.com',
    'Victor',
    'Oluchukwu',
    'password',
    '08022222222')
  RETURNING *;
  
  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    phone_number)
  VALUES('dpo@epicmail.com',
    'Doctor',
    'Vee',
    '***********',
    '09034345726')
  RETURNING *;

  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    phone_number)
  VALUES('coo@gmail.com',
    'Chidinma',
    'Nsoedo',
    'charamie',
    '08084141444')
  RETURNING *;
`;


const createMessages = `
  INSERT INTO messages(sender_id,
    receiver_id,
    subject,
    message,
    status)
  VALUES('1',
    '2',
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
    receiver_id,
    subject,
    message,
    status)
  VALUES('2',
    '1',
    'Charamie Designs',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    'read')
  RETURNING *;
`;

const createGroups = `
  INSERT INTO groups(name,
    description) 
  VALUES('Bootcampers',
    'We are aspiring Andelans') 
  RETURNING *;

  INSERT INTO groups(name,
    description) 
  VALUES('LFAs',
    'We guide aspiring Andelans') 
  RETURNING *;

  INSERT INTO groups(name,
    description) 
  VALUES('Panelists',
    'We accept/reject applications from the aspiring Andelans') 
  RETURNING *;
 `;

const createGroupMembers = `
  INSERT INTO all_group_members(group_id,
    first_name,
    last_name,
    email,
    role)
  VALUES('1',
    'Victor',
    'Vee',
    'victor@epicmail.com',
    'admin')
  RETURNING *;

  INSERT INTO all_group_members(group_id,
    first_name,
    last_name,
    email)
  VALUES('1',
    'John',
    'Doe',
    'johndoe@gmail.com')
  RETURNING *;

  INSERT INTO all_group_members(group_id,
    first_name,
    last_name,
    email,
    role)
  VALUES('2',
    'Desmond',
    'Vincent',
    'dv@rocketmail.com',
    'admin')
  RETURNING *;

  INSERT INTO all_group_members(group_id,
    first_name,
    last_name,
    email)
  VALUES('1',
    'Tyler',
    'McDonald',
    'tmcd@gmail.com')
  RETURNING *;
`;

const createSeedsQuery = `${createUsers}${createMessages}${createGroups}${createGroupMembers}`;

export default createSeedsQuery;
