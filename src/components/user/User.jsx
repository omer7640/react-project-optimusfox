export function User({ userData }) {
  return (
    <div>
      <h2>
        My name is {userData.name} I am {userData.age} years old and my role is
        {userData.role}
      </h2>
    </div>
  );
}
