import './Inputfield.css'

function InputField({ name, inputType, isRequired,label, value, changeHandler}) {
    return (
        <section className="new-post-inputfield">
            <label htmlFor={`${name}-field`}>{label}</label>
            <input
                name={`${name}-field`}
                id={`${name}-field`}
                type={inputType}
                required={isRequired}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </section>
    );
}

export default InputField;