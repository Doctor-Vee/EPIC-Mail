const dropUsersTable = 'DROP TABLE IF EXISTS users CASCADE; ';
const dropMessagesTable = 'DROP TABLE IF EXISTS messages CASCADE; ';
const dropGroupsTable = 'DROP TABLE IF EXISTS groups CASCADE; ';
const dropGroupMembersTable = 'DROP TABLE IF EXISTS all_group_members CASCADE; ';

const dropQuery = `${dropUsersTable}${dropMessagesTable}${dropGroupsTable}${dropGroupMembersTable}`;

console.log('Done dropping tables ');
export default dropQuery;
