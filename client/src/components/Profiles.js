import ProfileList from './ProfileList';

function Profiles(props) {
  return (
    <div className="container" style={{marginTop: 50}}>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.profiles.map(e => (
            <ProfileList profile={e} key={e.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Profiles