import Link from 'next/link';

const Assignments = () => {
    return (
        <div className="page">
            <h1 className="pageTitle">Assignments</h1>
            <p>Here's all the classrooms attached to this account.</p>

            <h2>Active</h2>

            <div className="section">
                <card>
                    <h3>Math Homework</h3>
                    <p>Teacher: Miss ABC</p>
                    <p>Class: XYZ Math</p>
                    <p>Due: Monday, 7am</p>

                    <p>Summary:</p>
                    <p>This is math homework with 12 questions about fractions</p>

                    <p>Status</p>
                    <p>Not Attempted</p>

                    <Link href="/dashboard/assignments/sample-assignment">Sample Assignment</Link>
                </card>
            </div>

            <h2>Previous</h2>

            <div className="section">
                <card>
                    <h3>English Paper</h3>
                    <p>Teacher: Mister ABC</p>
                    <p>Class: XYZ English</p>
                    <p>Submitted: 1/10/2020</p>

                    <p>Summary:</p>
                    <p>This is a book report on the book XYZ by ABC author</p>

                    <p>Status</p>
                    <p>Perfect Score!</p>

                    <Link href="/dashboard/assignments/sample-assignment">Sample Assignment</Link>
                </card>
            </div>
        </div>
    );
};

export default Assignments;
