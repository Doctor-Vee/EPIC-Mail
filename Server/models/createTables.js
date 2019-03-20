const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    firstName VARCHAR (30) NOT NULL,
    lastName VARCHAR (30) NOT NULL,
    password VARCHAR(50) NOT NULL,
    phoneNumber VARCHAR(15) UNIQUE NOT NULL,
    updated TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
`;

const createMessagesTable = `
  CREATE TABLE IF NOT EXISTS messages(
    id SERIAL PRIMARY KEY NOT NULL,
    senderId INTEGER NOT NULL,
    receiverId INTEGER,
    parentMessageId INTEGER,
    subject VARCHAR(100) UNIQUE NOT NULL,
    message VARCHAR NOT NULL,
    status VARCHAR(6) DEFAULT 'draft',
    createdOn TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
    FOREIGN KEY (senderId) REFERENCES users (id) ON DELETE CASCADE
  );
`;

const createInboxTable = `
CREATE TABLE IF NOT EXISTS inbox(
  id SERIAL PRIMARY KEY NOT NULL,
  senderId INTEGER NOT NULL,
  parentMessageId INTEGER,
  subject VARCHAR(100) UNIQUE NOT NULL,
  message VARCHAR NOT NULL,
  createdOn TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
  FOREIGN KEY (senderId) REFERENCES users (id) ON DELETE CASCADE
);
`;

const createGroupsTable = `
CREATE TABLE IF NOT EXISTS groups(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL
);
`;

const createGroupMembersTable = `
CREATE TABLE IF NOT EXISTS groupMembers(
  id SERIAL PRIMARY KEY NOT NULL,
  memberId INTEGER NOT NULL,
  FOREIGN KEY (memberId) REFERENCES users (id) ON DELETE CASCADE
);
`;

const createQuery = `${createUsersTable}${createMessagesTable}${createInboxTable}${createGroupsTable}${createGroupMembersTable}`;

console.log('Done creating tables');
export default createQuery;
