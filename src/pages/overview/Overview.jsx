import "./Overview.css"
import BlogBlock from "../../components/blog-block/BlogBlock.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

function Overview() {

    const [blogs, setBlogs] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        fetchBlogs()
        console.log("Bam!");
    }, []);

    async function fetchBlogs() {
        toggleError(false);

        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': 'd83f1d14-c828-41b5-940b-c58d139b7820'
                },
            });
            setBlogs(response.data);
            console.log(response.data);
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <h1>Bekijk alle {blogs.length} posts op het platform</h1>
                <ul className="post-list">
                    {error ? <Navigate to="/error" /> :
                        <>
                            {blogs.map((blog) => {
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
                        </>
                    }
                </ul>
            </div>
        </section>
    )
}

export default Overview