export default function ClassroomDetails({ params }) {
    return (
        <div className="page">
            <h1 className="pageTitle">{params.classroomName}</h1>
            <p>Overview for this particular class.</p>

            <h2>Students and Staff</h2>
            <div className="section">
                <ul>
                    <li>Teacher: XYZ</li>
                    <li>Student Aid: ABC</li>
                </ul>
                <ul>
                    <li>Student 1</li>
                    <li>Student 2</li>
                    <li>Student 3</li>
                    <li>Student 4</li>
                </ul>
            </div>

            <h2>Assignments</h2>
            <div className="section">
                <h3>Active</h3>
                <ul>
                    <li>Project 1</li>
                    <li>Homework 2</li>
                </ul>

                <h3>Previous</h3>
                <ul>
                    <li>Assignment 12</li>
                    <li>Assignment 11</li>
                </ul>
            </div>

            <h2>Dynamic Options (Student vs Teacher)</h2>
            <div className="section">
                <button>Submit Assigment</button>
                <button>View Grades</button>
                <button>Ask Question?</button>
            </div>

            <div>
                <button>Add Assigment</button>
                <button>Grade Submissions</button>
                <button>Edit Class Details</button>
            </div>
        </div>
    );
};