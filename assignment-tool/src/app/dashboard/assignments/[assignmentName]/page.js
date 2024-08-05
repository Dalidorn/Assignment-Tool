export default function AssignmentDetails({ params }) {
    return (
        <div>
            <h1>{params.assignmentName}</h1>
            <p>Overview and details for this particular assignment.</p>
        </div>
    );
  };