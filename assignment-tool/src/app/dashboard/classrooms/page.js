import Link from 'next/link';

const Classrooms = () => {
    return (
        <div>
            <h1>Your Classrooms</h1>

            <p>Here's all the classrooms attached to this account.</p>

            <div>
                <card>
                    <h2>Class XYZ</h2>
                    <p>Teacher: Miss ABC</p>
                    <p>Location: Rando School</p>
                    <p>Next Class: 7am Monday</p>

                    <h3>Recent Assignment</h3>
                    <ul>
                        <li>123 Assessment</li>
                        <li>Project 456</li>
                        <li>Group Work 789</li>
                    </ul>

                    <Link href="/dashboard/classrooms/sample-classroom">Details</Link>
                </card>
            </div>
        </div>
    );
};

export default Classrooms;
