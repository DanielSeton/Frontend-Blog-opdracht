import "./DetailPage.css"
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import formatDate from "../../helpers/formatDate.js";
import {useEffect, useState} from "react";
import axios from "axios";
import BlogBlock from "../../components/blog-block/BlogBlock.jsx";


function DetailPage() {

    const [blog, setBlog] = useState([]);
    const [error, toggleError] = useState(false);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetchBlog()
        console.log("Bam!");
    }, []);



    async function fetchBlog() {
        toggleError(false);

        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': 'd83f1d14-c828-41b5-940b-c58d139b7820'
                }, params: {
                    id: id
            }
            });
            setBlog(response.data[0]);
            console.log(response.data[0]);
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    async function deleteBlog(){

        try {
            const result = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
                headers: {
                    'novi-education-project-id': 'd83f1d14-c828-41b5-940b-c58d139b7820'
                },
            });
            console.log(result)
            navigate('/overview')
        } catch(e) {
            console.error(e);
        }


    }

    return (
        <section className="post-detail-section outer-content-container">
            {error ? <Navigate to="/error" /> :
                <div className="inner-content-container__text-restriction">
                    <h1>{blog.title} ({blog.readTime} minuten)</h1>
                    <h2>{blog.subtitle}</h2>
                    <p className="post-detail-author">Geschreven door <em>{blog.author}</em> op {formatDate(blog.created)}</p>
                    <p>{blog.readTime} minuten lezen</p>
                    <p>{blog.content}</p>
                    <p>{blog.comments} reacties - {blog.shares} keer gedeeld</p>

                    <button type="button" onClick={deleteBlog}>Verwijder deze post</button>

                    <Link to="/overview" className="back-link">
                        <p>Terug naar de overzichtpagina</p>
                    </Link>
                </div>
            }
        </section>
    )
}

export default DetailPage