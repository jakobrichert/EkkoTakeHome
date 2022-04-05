import "./User.css";

function User({ user }) {
  return (
    <div className="user">
      <p>
        <span className="label">Firstname: </span>
        {user.firstName}
      </p>
      <p>
        <span className="label">Lastname: </span>
        {user.lastName}
      </p>
      <p>
        <span className="label">Country: </span>
        {user.country}
      </p>

      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default User;
