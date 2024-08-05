export default function AssignmentDetails({ params }) {
    return (
        <div className="page">
            <h1 className="pageTitle">{params.assignmentName}</h1>
            <p>Overview and details for this particular assignment.</p>

            <h2>Description</h2>
            <p>In this assignment you'll be answering the open ended questions below!</p>

            <h2>Details</h2>
            <ul>
                <li>Due Date: 1/10/2024</li>
                <li>Grade Value: 3% of total</li>
            </ul>

            <h2>Supporting Material</h2>
            <p>Watch this youtube video!</p>

            <h2>Questions</h2>
            <ul>
                <li>How are you feeling?</li>
                <li>What are you doing?</li>
                <li>Who's your favorite teacher?</li>
            </ul>

            <h2>Requirements</h2>
            <ul>
                <li>You must show your work</li>
                <li>Each answer must be at least two sentences long</li>
            </ul>

            <h2>Options</h2>
            <p>Below are the different ways you can complete the assignment.</p>
            <ul>
                <li><button>Download Assigment</button></li>
                <li><button>Complete Online Now</button></li>
                <li>Hand write answers</li>
                <li>Record audio of you reading and answering the questions</li>
            </ul>
        </div>
    );
  };