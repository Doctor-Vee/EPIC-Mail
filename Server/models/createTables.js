const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    updated TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
`;

const createMessagesTable = `
  CREATE TABLE IF NOT EXISTS messages(
    id SERIAL PRIMARY KEY NOT NULL,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER,
    parent_message_id INTEGER,
    subject VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(6) DEFAULT 'draft',
    created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
    FOREIGN KEY (sender_id) REFERENCES users (id) ON DELETE CASCADE
  );
`;

const createInboxTable = `
CREATE TABLE IF NOT EXISTS inbox(
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER NOT NULL,
  parent_message_id INTEGER,
  subject VARCHAR(100) UNIQUE NOT NULL,
  message TEXT NOT NULL,
  created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
  FOREIGN KEY (sender_id) REFERENCES users (id) ON DELETE CASCADE
);
`;

const createGroupsTable = `
CREATE TABLE IF NOT EXISTS groups(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL
);
`;

const createGroupMembersTable = `
CREATE TABLE IF NOT EXISTS group_members(
  id SERIAL PRIMARY KEY NOT NULL,
  member_id INTEGER NOT NULL,
  FOREIGN KEY (member_id) REFERENCES users (id) ON DELETE CASCADE
);
`;

const createQuery = `${createUsersTable}${createMessagesTable}${createInboxTable}${createGroupsTable}${createGroupMembersTable}`;

console.log('Done creating tables');
export default createQuery;
