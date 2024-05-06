import React from 'react';

const Profile = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    // Add more user profile data as needed
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more profile data here */}
    </div>
  );
};

export default Profile;
