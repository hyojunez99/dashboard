import { useState } from "react";

const Login = ({onLogin}) => {
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); //이미 있는 기능 실행 방지
    onLogin(user);
  };
  
  return (
    <form id="login-page" onSubmit={handleSubmit}>
      <h2>이름을 입력하세요</h2>
      <div className="login-box">
      <input
        type="text"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button type="submit">로그인</button>
      </div>
    </form>
  );
};

export default Login;
