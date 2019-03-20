const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE; ';
const dropMessagesTable = 'DROP TABLE IF EXISTS messages CASCADE; ';
const dropInboxTable = 'DROP TABLE IF EXISTS inbox CASCADE; ';
const dropGroupsTable = 'DROP TABLE IF EXISTS groups CASCADE; ';
const dropGroupMembersTable = 'DROP TABLE IF EXISTS groupMembers CASCADE; ';

const dropQuery = `${dropUsersTable}${dropMessagesTable}${dropInboxTable}${dropGroupsTable}${dropGroupMembersTable}`;

console.log('Done dropping tables ');
export default dropQuery;
