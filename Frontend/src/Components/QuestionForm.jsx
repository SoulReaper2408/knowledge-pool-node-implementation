import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./QuestionForm.css";
import axios from 'axios';

// const token = localStorage.getItem('token');
// const headers = token ? {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
  
// } : {};
// console.log(`Bearer ${token}`);


const QuestionForm = () => {
  const navigate = useNavigate();

      const token = localStorage.getItem('token');
  
  // const token = localStorage.getItem('token');
  console.log(token);
// Attach the token to the Authorization header


  const [difficulty, setDifficulty] = useState("");
  const [number, setNumQuestions] = useState("");
  const [error, setError] = useState("");
  const [typegen, setTypegen] = useState("");
  const [question_type, setQuestionType] = useState("");
  const [subtopics, setSubtopics] = useState([]); // New state for subtopics

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleTypegenChange = (event) => {
    setTypegen(event.target.value);
  };

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
  };

  const handleSubtopicsChange = (event) => {
    const selectedSubtopic = event.target.value;
    // Check if the selected subtopic is already in the array
    if (subtopics.includes(selectedSubtopic)) {
      // If it is, remove it from the array (uncheck the checkbox)
      setSubtopics(
        subtopics.filter((subtopic) => subtopic !== selectedSubtopic)
      );
    } else {
      // If it is not, add it to the array (check the checkbox)
      setSubtopics([...subtopics, selectedSubtopic]);
    }
  };
  const handleGenerateQuestions = async (event) => {
    event.preventDefault();
   
    const response = await fetch("http://localhost:5000/kp/questions/gen", {
      method: "POST",
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Attach the token to the Authorization header
      },
      body: JSON.stringify({
        question_type,
        difficulty,
        subtopics,
        typegen,
        number,
      }),
    });
  // const headers = token ? {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${token}`,
  // } : {};

  // try {
  //   const response = await axios.post(
  //     "http://localhost:5000/kp/questions/gen",
  //     {
  //       question_type,
  //       difficulty,
  //       subtopics,
  //       typegen,
  //       number,
  //     },
  //     { headers }
  //   );
  //   console.log(response.status);
  //   console.log(response.json());
  //   console.log(response.headers);

    navigate('/question-list');
  //   }catch (error) {
  //   // Handle any error that occurred during the request
  //   console.error(error);
  //   setError(await response.text());
  //   // ...
  // }

    // console.log(`Bearer ${token}`);



    // // Reset form state
    // setTopic("");
    // setDifficulty("");
    // setNumQuestions("");
    // setError("");
  };

  return (
    <div className="question-form-container">
      <form className="question-form" onSubmit={handleGenerateQuestions}>
        <h2>Generate Questions</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="typegen">Typegen</label>
          <select
            id="typegen"
            value={typegen}
            // placeholder="Select type of question generation"
            onChange={handleTypegenChange}
          >
            <option value="">Select type of question generation</option>
            <option value="new">Generate new questions</option>
            <option value="old">Generate questions from Knowledge-Pool</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subtopics">Subtopics</label>
          <select
            id="subtopics"
            multiple // Allow multiple selections
            value={subtopics} // Use the "subtopics" state as the value
            onChange={handleSubtopicsChange} // Handle the change event
            placeholder="Choose the topics"
          >
            {/* Add options for the subtopics */}
            <option value="arrays">Arrays</option>
            <option value="strings">Strings</option>
            <option value="vectors">Vectors</option>
            <option value="graphs">Graphs</option>
            <option value="expression_parsing">Expression Parsing</option>
            <option value="fast_fourier_transform">
              Fast Fourier Transform
            </option>
            <option value="two_pointers">Two Pointers</option>
            <option value="binary_search">Graphs</option>
            <option value="disjoint_set_union">Disjoint Set Union</option>
            <option value="number_theory">Number Theory</option>
            <option value="hashing">Hashing</option>
            <option value="shortest_paths">Shortest Paths</option>
            <option value="matrices">Matrices</option>
            <option value="dynamic_programming">Dynamic Programming</option>
            <option value="meet-in-the-middle">Meet in the Middle</option>
            <option value="games">Games</option>
            <option value="schedules">Schedules</option>
            <option value="constructive_algorithms">
              Constructive Algorithms
            </option>
            <option value="greedy">Greedy</option>
            <option value="divide_and_conquer">Divide and Conquer</option>
            <option value="flows">Flows</option>
            <option value="geometry">Geometry</option>
            <option value="math">Math</option>
            <option value="sortings">Sortings</option>
            <option value="ternary_search">Ternary Search</option>
            <option value="combinatorics">Combinatorics</option>
            <option value="trees">Trees</option>
            <option value="stacks">Stacks</option>
            <option value="queues">Queues</option>
            <option value="linked_list">Linked List</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numQuestions">Number of Questions</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={handleNumQuestionsChange}
            placeholder="Enter the number of questions"
          />
        </div>
        {/* Adding the new drop-down for Question Type */}
        <div className="form-group">
          <label htmlFor="question_type">Question Type</label>
          <select
            id="question_type"
            value={question_type}
            onChange={handleQuestionTypeChange}
          >
            <option value="">Select question type</option>
            <option value="coding">Coding Question</option>
            <option value="mcq">MCQ</option>
            <option value="subjective">Subjective</option>
          </select>
        </div>
        <div className="button-group">
          <button
            type="submit"
            className="generate-button"
            value="Generate"
            align="center"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;