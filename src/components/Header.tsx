import { Link, useNavigate } from "react-router-dom";


//useNavigate() 사용
//유저가 로그인해서 리다이렉트 하거나
// 유저가 어떤 페이지로 갔는데 접근 권한이 없거나 했을때

function Header() {
  const navigate  = useNavigate();
  const onAboutClick  = () =>{
    navigate("/about");
  }

  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
         {/*  <Link to={"/about"}>About</Link>
         */}
         <button onClick={onAboutClick}>About</button>
         </li>
      </ul>
    </header>
  );
}
export default Header;
