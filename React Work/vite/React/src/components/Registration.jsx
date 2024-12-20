
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
  return (
    <div>
      Welcome to Registration Page

      <form>
      <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Registration
