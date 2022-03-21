import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import React, { Component } from 'react'
import Select from 'react-select'

import Card from "../ui/Card";
import classes from "./CreateTutoringAdForm.module.css"
function CreateTutoringAdForm(props) {
    const history = useHistory();
    const titleInputRef = useRef();
    const contentInputRef = useRef();
    const sessionLenghtInputRef = useRef();
    const PriceInputRef = useRef();
    const onlineInputRef = useRef();
    const homeInputRef = useRef();
    const [dataFetch, setDatafetch] = useState();
    const studentHomeInputRef = useRef();
    const [subject, setSubject] = useState();
    const [location, setLocation] = useState();
    const [calification, setCalification] = useState();
    const [educationLevel, setEducationLevel] = useState();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;
        const enteredSubject = subject.value;
        const enteredLocation = location.value;
        const enteredCalification = calification.value;
        const enteredEducationLevel = educationLevel.value;
        const enteredSessionLenght = sessionLenghtInputRef.current.value;
        const enteredPrice = PriceInputRef.current.value;
        // const enteredOnline = onlineInputRef.current.value;
        // const enteredHome = homeInputRef.current.value;
        // const enteredStudentHome = studentHomeInputRef.current.value;
        const tutoringAdData={
            title: enteredTitle,
            content: enteredContent,
            subjectId: enteredSubject,
            locationId: enteredLocation,
            calificationId: enteredCalification,
            educationLevelId: enteredEducationLevel,
            sessionLenghtinMinutes: parseInt(enteredSessionLenght),
            pricePerSession: parseInt(enteredPrice),
            // online: enteredOnline,
            // home: enteredHome,
            // studentHome: enteredStudentHome

        };
        console.log(tutoringAdData);
        props.onTutoringAd(tutoringAdData);
        history.replace('/tutoring-ads');
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedSubjects, setLoadedSubjects] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch("https://localhost:5001/Subjects").then(response => {
            return response.json();
        }).then(data => {
            const subjects=[];
            for(var key in data){
                const subject ={
                    value: data[key].id,
                    label:data[key].name
                };
                subjects.push(subject);
            }
            setIsLoading(false);
            setLoadedSubjects(subjects);
        })
    }, []);




    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }





      const optionsLocation=[
          {value: 1, label:'Bucharest'},
          {value: 2, label:'Brasov'},
          {value: 3, label:'Arad'},
          {value: 4, label:'Constanta'}
      ]
      const optionsSubject = [
        { value: 1, label: 'Mathematics' },
        { value: 2, label: 'History' },
        { value: 3, label: 'Computer Science' },
        { value: 4, label: 'English' }
    ]
    const optionsCalification=[
        {value: 1, label:'Licensed'}
    ]
    const optionsEducationLevel=[
        {value: 1, label:'Highschool'}
    ]

    return <div className={classes.item}>
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type='text' required id='title' ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="Description">Content</label>
                <textarea id='description' required rows='5' ref={contentInputRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="subject">Subject</label>
                <Select options={optionsSubject} onChange={setSubject}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="location">Location</label>
                <Select options={optionsLocation} onChange={setLocation}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="calification">Calification</label>
                <Select options={optionsCalification} onChange={setCalification}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="educationLevel">Education Level</label>
                <Select options={optionsEducationLevel} onChange={setEducationLevel}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="price">Price</label>
                <input type='text' required id='price' ref={PriceInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="sessionLenght">Session length(Minutes)</label>
                <input type='text' required id='sessionLenght' ref={sessionLenghtInputRef}></input>
            </div>
            {/* <div className={classes.control}>
                <label htmlFor="online">Availability online</label>
                <input type='checkbox'  id='online' ref={onlineInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="home">Availability home</label>
                <input type='checkbox'  id='home' ref={homeInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="studentHome">Availability student's home</label>
                <input type='checkbox'  id='studentHome' ref={studentHomeInputRef}></input>
            </div> */}
            <div className={classes.actions}>
                <button>Create Tutoring Ad</button>
            </div>

        </form>
    </Card>
    </div>
}

export default CreateTutoringAdForm;