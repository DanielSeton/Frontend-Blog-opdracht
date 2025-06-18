import "./BlogBlock.css"
import {NavLink} from "react-router-dom";

function BlogBlock({id, title, author, commentAmount, shares}) {

    return (
        <div>
            <h2 className="post-title"><NavLink to={`/detail/${id}`}>{title}</NavLink> ({author})</h2>
            <p>
                {commentAmount} reacties - {shares} keer gedeeld
            </p>
        </div>
    )
}

export default BlogBlock