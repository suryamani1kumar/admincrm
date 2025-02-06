import { HiOutlineUserCircle } from 'react-icons/hi';
import { FaLock, FaUser } from 'react-icons/fa';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { useState } from 'react';
import { MdError } from 'react-icons/md';
import { useNavigate } from 'react-router';

const Login = ({ setIsAuthenticated }) => {
  let navigate = useNavigate();

  const [passwordHideShow, setPasswordHideShow] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    password: '',
    userormail: '',
  });
  const [errorMessage, setErrorMessage] = useState({});

  const handleloginDetails = (e) => {
    const { value, name } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
    setErrorMessage({});
  };
  const preventCopyPaste = (e) => {
    e.preventDefault();
    return false;
  };
  const handlelogin = (e) => {
    e.preventDefault();
    if (!loginDetails.userormail && !loginDetails.password) {
      setErrorMessage({ password: 'error', userormail: 'error' });
      return;
    } else if (!loginDetails.userormail) {
      setErrorMessage({
        userormail: 'Please fill out email or username fields.',
      });
      return;
    } else if (loginDetails.userormail !== 'triploom_1234') {
      setErrorMessage({ userormail: 'Please check email or username.' });
      return;
    } else if (!loginDetails.password) {
      setErrorMessage({ password: 'Please fill out password fields.' });
      return;
    } else if (loginDetails.password !== 'triploom_1234') {
      setErrorMessage({ password: 'Please check password fields.' });
      return;
    }
    if (
      loginDetails.userormail == 'triploom_1234' &&
      loginDetails.password == 'triploom_1234'
    ) {
      setIsAuthenticated(true);
      navigate("/blog");
    }
  };

  return (
    <div className="loginconatiner">
      <div className="login">
        <div className="login_form-box ">
          <div className="login_header-form">
            <HiOutlineUserCircle />
          </div>

          <form className="login-form" onSubmit={handlelogin}>
            {errorMessage.password && errorMessage.userormail ? (
              <div className="error error-style-1">
                <MdError /> Please fill out all required fields.
              </div>
            ) : errorMessage.userormail ? (
              <div className="error error-style-1">
                <MdError /> {errorMessage.userormail}
              </div>
            ) : errorMessage.password ? (
              <div className="error error-style-1">
                <MdError /> {errorMessage.password}
              </div>
            ) : null}
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
                autoComplete="off"
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
                placeholder="Enter password"
                className="login_form-control"
                name="password"
                id="password"
                autoComplete="off"
                value={loginDetails.password}
                onChange={handleloginDetails}
                onPaste={preventCopyPaste}
                onCopy={preventCopyPaste}
              />
              <span
                className="passhidshow"
                onClick={() => setPasswordHideShow(!passwordHideShow)}
              >
                {passwordHideShow ? <BiSolidHide /> : <BiSolidShow />}
              </span>
            </div>
            <button type="submit" className="btn btn-secondary btn-block">
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
