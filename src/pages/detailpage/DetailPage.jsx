import "./DetailPage.css"
import {Link, useParams} from "react-router-dom";
import data from "../../constants/data.json";
import formatDate from "../../helpers/formatDate.js";


function DetailPage() {

    const { id } = useParams();

    const {title, readTime, subtitle, author, created, content, comments, shares} = data.find((data) => {
        return data.id.toString() === id;
    });

    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <h1>{title} ({readTime} minuten)</h1>
                <h2>{subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDate(created)}</p>
                <p>{readTime} minuten lezen</p>
                <p>{content}</p>
                <p>{comments} reacties - {shares} keer gedeeld</p>

                <Link to="/overview" className="back-link">
                    <p>Terug naar de overzichtpagina</p>
                </Link>
            </div>
        </section>
    )
}

export default DetailPage