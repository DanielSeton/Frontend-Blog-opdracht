import "./Post.css"
import InputField from "../../components/input-field/InputField.jsx";
import {useState} from "react";

function Post() {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <form className="new-post-form" onSubmit={handleSubmit}>
                    <h1>Post toevoegen</h1>
                    <InputField
                            label="Titel"
                            name="title"
                            inputType="text"
                            isRequired={true}
                            value={title}
                            changeHandler={setTitle}/>

                    <InputField
                            label="subtitle"
                            name="subtitle"
                            inputType="text"
                            isRequired={true}
                            value={subtitle}
                            changeHandler={setSubtitle}/>

                    <InputField
                            label="Naam en achternaam"
                            name="author"
                            inputType="text"
                            isRequired={true}
                            value={author}
                            changeHandler={setAuthor}/>
                    <label>
                        Blogpost
                    </label>
                    <section>
                        <textarea
                            name="remark"
                            id="remark-field"
                            cols="30"
                            rows="10"
                            required
                            minLength={300}
                            maxLength={2000}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}>
                        </textarea>
                    </section>
                    <section>
                        <button className="form-button" type="submit">Toevoegen</button>
                    </section>
                </form>
            </div>
        </section>
    )
}

export default Post