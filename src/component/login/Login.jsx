import { HiOutlineUserCircle } from 'react-icons/hi';
import { FaLock, FaUser } from 'react-icons/fa';
const Login = () => {
  return (
    <div className="loginconatiner">
      {/* https://codepen.io/juniorthx3/pen/bGNxjEY */}
      <div className="login">
        <div className="login_form-box ">
          <div className="login_header-form">
            <HiOutlineUserCircle />
          </div>
          <form className="login-form">
            <div className="login_input-group">
              <div className="login_input-group-prepend">
                <span className="login_input-group-text">
                  <FaUser />
                </span>
              </div>
              <input
                type="text"
                className="login_form-control"
                placeholder="Username"
              />
            </div>
            <div className="login_input-group">
              <div className="login_input-group-prepend">
                <span className="login_input-group-text">
                  <FaLock />
                </span>
              </div>
              <input
                type="text"
                className="login_form-control"
                placeholder="Password"
              />
            </div>
            <button type="button" className="btn btn-secondary btn-block">
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
