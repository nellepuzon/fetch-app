import React, { useState } from 'react';

const EditForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');

  const handleEdit = (e) => {
    e.preventDefault();

    const data = { userId, title, body };
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response);
      alert('Form Updated');
      return response.json();
    });
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <h3>Update Post</h3>
        <div>
          <input
            type='text'
            name='userId'
            placeholder='Input UserId'
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
          />
        </div>
        <div>
          <input
            type='text'
            name='title'
            placeholder='Input Title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <input
            type='text'
            name='body'
            onChange={(e) => setBody(e.target.value)}
            placeholder='Input Body'
            value={body}
          />
        </div>
        <div>
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
