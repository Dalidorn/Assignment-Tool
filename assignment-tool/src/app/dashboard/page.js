const Dashboard = () => {
    return (
        <div className="page">
            <h1 className="pageTitle">Good Morning User!</h1>
            <p>This is where the overview of all app info should go depending on the user</p>

            <div className="section">
                <h2>Recent Activity</h2>
                <ul>
                    <li>Submissions to XYZ Assignment</li>
                    <li>User Added to XYZ Class</li>
                    <li>New Tutor added to XYZ student</li>
                </ul>
            </div>

            <div className="section">
                <h2>Active Assignments</h2>
                <ul>
                    <li>Math Homework #1 - (7/10 turned in)</li>
                    <li>English Paper - New Submission!</li>
                </ul>
            </div>

            <div className="section">
                <h2>Today's Classes</h2>
                <ul>
                    <li>Math, 7-4pm</li>
                    <li>English, 4-6pm</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
