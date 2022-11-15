import {useState} from "react"
import {useHistory} from "react-router-dom"

const Form = ({url, submitNewWord}) => {
    // const history = useHistory()
    
    const [formData, setFormData] = useState({
        word: "",
        definition: ""
    })
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(
                newWord => submitNewWord(newWord),
                // history.push("/words")
            )
    }

    return (
        <form id="new-word-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="word"
                placeholder="New word..."
                value={formData.word}
                onChange={handleChange}
            />
            <input
                type="text"
                name="definition"
                placeholder="Definition..."
                value={formData.definition}
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    )
}

export default Form