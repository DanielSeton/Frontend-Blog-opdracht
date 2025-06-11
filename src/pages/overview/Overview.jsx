import "./Overview.css"
import BlogBlock from "../../components/blog-block/BlogBlock.jsx";
import data from "../../constants/data.json";

function Overview() {
    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <h1>Bekijk alle {data.length} posts op het platform</h1>
                <ul className="post-list">
                    {data.map((blog) => {
                        return (
                            <li className="post-item" key={blog.id}>
                                <BlogBlock
                                    id={blog.id}
                                    title={blog.title}
                                    author={blog.author}
                                    commentAmount={blog.comments}
                                    shares={blog.shares}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Overview