import React from 'react';

export default function Login() {
    return (
      <div className="container" style={{padding: "20px"}}> 
      <div className="card mb-4 shadow-sm" style={{width: '340px', padding: '20px'}}>
        <form>
            <h3>Login In</h3>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" style={{width: "300px"}} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" style={{width: '300px'}}/>
            </div><br/>

            <button type="submit" className="btn btn-primary btn-block" style={{width: '300px'}}>Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
      </div>
    </div>
    );
}
