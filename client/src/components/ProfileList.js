function ProfileList(props) {
  return (
    <tr>
      <td>{props.profile.title}</td>
      <td>{props.profile.category}</td>
      <button className="btn btn-danger">Delete</button>
    </tr>
  )
}

export default ProfileList;

