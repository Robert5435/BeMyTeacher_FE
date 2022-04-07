import { useEffect, useRef, useState } from "react";
import "./AdminPanel.css"

function AdminSubject() {

    let url = `https://localhost:5001/Subjects`;

    const subjectInputRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [loadedSubjects, setLoadedSubjects] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            const subjects = [];
            for (var key in data) {
                const subject = {
                    id: key,
                    ...data[key]
                };
                subjects.push(subject);
            }
            setLoadedSubjects(subjects);
            setIsLoading(false);
        })
    }, []);

    async function handleSubmission() {
        let enteredName = subjectInputRef.current.value;

        const subjectData = {
            Name: enteredName
        }

        const formData = new FormData()
        formData.append("name", enteredName);


        fetch("https://localhost:5001/Subjects/create",
        { 
            headers:{
                'Content-Type' : 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(subjectData),

            credentials:'include',
        });

    }

    console.log(loadedSubjects)

    function handleDelete(id){
        let urlDelete = `https://localhost:5001/Subjects/${id}`
        fetch(urlDelete,
            {
                method:'DELETE',
                credentials:'include'
            })
            window.location.reload()
    }
    

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div>
                <form className="form">
                    <div className="control">
                        <label htmlFor="subject">Name of the subject</label>
                        <input type='text' required id='subject' ref={subjectInputRef} />
                    </div>
                    <button onClick={handleSubmission}>Add subject</button>
                </form>


                <div className="form">
                    <h3>Subjects in database</h3>
                    {loadedSubjects.map((subject) => (
                        <div className="titleCloseBtn">
                        <p key={subject.id}>{subject.name} <button onClick={() =>handleDelete(subject.id)}>X</button></p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }


}

export default AdminSubject;