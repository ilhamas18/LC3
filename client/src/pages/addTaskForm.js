import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { TaskPost } from '../store/actions/taskPost';

function AddTask() {
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch()

  const addPost = (data) => {
    dispatch(TaskPost(data))
  }

  return (
    <div className="container" style={{marginLeft: 575, marginTop: 50}}>
      <form onSubmit={handleSubmit(addPost)}>
        <label for="title">Title</label><br/>
        <input type="text" {...register("title")} />
        <br/>
        <label for="category">Category:</label><br/>
        <select name="category" {...register("category")}>
          <option value="Backend">Backend</option>
          <option value="Frontend">Frontend</option>
          <option value="Mobile">Mobile</option>
        </select><br/>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddTask;