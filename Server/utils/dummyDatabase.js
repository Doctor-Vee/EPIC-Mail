export default {
  users: [
    {
      id: 1,
      email: 'oluvic@gmail.com',
      firstName: 'Victor',
      lastName: 'Oluchukwu',
      password: 'password',
    },
    {
      id: 2,
      email: 'drvee@epicmail.com',
      firstName: 'Doctor',
      lastName: 'Vee',
      password: '***********',
    },
    {
      id: 3,
      email: 'chidinma@gmail.com',
      firstName: 'Chidinma',
      lastName: 'Nsoedo',
      password: 'charamie',
    },
  ],
  messages: [
    {
      id: 1,
      senderId: null,
      receiverId: null,
      createdOn: new Date().toString(),
      subject: 'Hello Victor',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book`,
      parentMessageId: null,
      status: 'draft',
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      createdOn: new Date().toString(),
      subject: 'Hello Chidinma',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book`,
      parentMessageId: 1,
      status: 'sent',
    },
    {
      id: 3,
      senderId: 3,
      receiverId: 2,
      createdOn: new Date().toString(),
      subject: 'Charamie Designs',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book`,
      parentMessageId: 1,
      status: 'read',
    },
  ],
};
