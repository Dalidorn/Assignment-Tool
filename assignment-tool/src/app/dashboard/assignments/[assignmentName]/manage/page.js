export default function AssignmentManagement({ params }) {
    return (
        <div>
            <h1 className="pageTitle">Assignment Management: {params.assignmentName}</h1>

            <h2>Options for teachers</h2>
            <div>
                <h3>Data</h3>
                <p>Historical Metrics</p>
                <p>AI Insights/Recommendations</p>
                <p>Student Evaluation/Feedback</p>
                <p>Averages and Performance</p>
                <p>Number of students/other teachers using: ##</p>
                <p>Classes Currently Assigned to:</p>
                <p>Classes Previously Assigned to:</p>

                <h3>Functions</h3>
                <ul>
                    <li>Download</li>
                    <li>Print</li>
                    <li>Share</li>
                    <li>Copy raw text</li>
                    <li>Assign to class</li>
                    <li>Fork, Duplicate, Clone, etc</li>
                    <li>Edit</li>
                    <li>Export</li>
                    <li>Delete</li>
                    <li>Manage Supporting Content (Guidelines, External Links, Documents, Parental Info, Internal Annotation, Interactive Elements)</li>
                    <li>Archive</li>
                    <li>Set Grading Criteria</li>
                    <li>Manage Integrations</li>
                    <li>Review/Approve Change Requests</li>
                    <li>Manage Tags</li>
                    <li>Save as Template</li>
                    <li>Versioning</li>
                    <li>Set Reminders/Custom Notifications</li>
                    <li>Edit Assignment Options</li>
                </ul>
            </div>



            <h2>Options for students</h2>
            <ul>
                <li>View History</li>
                <li>Options for managing/downloading/deleting</li>
                <li>Current AI Feedback</li>
                <li>Ask Question/Request Help</li>
                <li>Submit Exemption/Extention Request</li>
                <li>Set Reminders/Custom Notifications</li>
                <li>View Grading Rubric</li>
                <li>Update Submission</li>
                <li>Final Submission Button</li>
            </ul>
        </div>
    );
};