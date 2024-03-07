import { useParams } from "react-router-dom";


function Author(){
    const author = useParams();
    return <div>${author}</div>;

};

export default Author;
