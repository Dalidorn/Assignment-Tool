const Submit = () => {
    return (
        <div className="page">
            <h1 className="pageTitle">Submit Assignment</h1>
            <p>Page for students to submit assignments. Click the button to select file. Should parse basic data to see if we can intuit what assignment it is, otherwise render class/assignment selector for them to pick who it goes to. Once upload process is completed, redirect to that assignment /manage for final submission</p>

            <div className="section">
                <input type="file" />

                <select>
                    <option>Options for every assignment accepting submissions</option>
                    <option>Organize by class and due date/time</option>
                    <option>Color code by submission status - already submitted/late submission/missing/etc</option>
                </select>

                <button>Upload</button>
            </div>
        </div>
    );
};

export default Submit;
