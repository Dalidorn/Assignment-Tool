const Create = () => {
    return (
        <div className="page">
            <h1 className="pageTitle">Create New</h1>
            
            <button>Classroom</button>
            <button>Assignment</button>


            <div className="section">
                <h2>New Assignment Options</h2>
                <p>Select a method to make the new assignment</p>

                <button>Question by Question</button>
                <button>Start with AI Generation</button>
                <button>Generate Assignment from Expected Submission</button>
                <button>Upload or Import</button>
            </div>

            <div className="section">
                <h2>New Classroom Options</h2>
                <p>Provide the details below to get started!</p>

                // form to collect location, time, start date, grade level, subject, communicaiton method, etc
                <form>
                    <input type="text" placeholder="Class Name..."/>
                </form>
            </div>
        </div>
    );
};

export default Create;
