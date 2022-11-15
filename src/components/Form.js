const Form = () => {
    return (
        <form id="new-word-form">
            <input type="text" name="word" placeholder="New word..." />
            <input type="text" name="definition" placeholder="Definition..." />
            <input type="submit" />
        </form>
    )
}

export default Form