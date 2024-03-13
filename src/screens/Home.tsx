import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Best Seller Author</h1>
            <ul>
                <li>
                    <Link to={"/Author/rolling"}>J.K.Rowing</Link>
                    <Link to={"/Author/tol"}>J.R.R.Tolkien</Link>
                </li>
            </ul>
        </div>
        )
}

export default Home;