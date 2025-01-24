import { HiOutlineUserCircle } from 'react-icons/hi';
import { FaLock, FaUser } from 'react-icons/fa';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { useState } from 'react';
const Login = () => {
  const [passwordHideShow, setPasswordHideShow] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    password: '',
    userormail: '',
  });
  const handleloginDetails = (e) => {
    const { value, name } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  return (
    <div className="loginconatiner">
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
                placeholder="Enter email or username"
                name="userormail"
                id="userormail"
                value={loginDetails.userormail}
                onChange={handleloginDetails}
              />
            </div>
            <div className="login_input-group">
              <div className="login_input-group-prepend">
                <span className="login_input-group-text">
                  <FaLock />
                </span>
              </div>
              <input
                type={passwordHideShow ? 'password' : 'text'}
                placeholder="Enter Password"
                className="login_form-control"
                name="password"
                id="password"
                value={loginDetails.password}
                onChange={handleloginDetails}
              />
              <span
                className="passhidshow"
                onClick={() => setPasswordHideShow(!passwordHideShow)}
              >
                {passwordHideShow ? <BiSolidHide /> : <BiSolidShow />}
              </span>
            </div>
            <button type="button" className="btn btn-secondary btn-block">
              LOGIN
            </button>
            <div className="message">
              <div className="loginRemember">
                <input type="checkbox" /> Remember me
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
