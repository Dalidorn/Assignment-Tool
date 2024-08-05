import Link from 'next/link';

const Assignments = () => {
  return (
    <div>
      <h1>Assignments</h1>
      <p>All assignments attached to the account.</p>
      <ul>
        <li><Link href="/dashboard/assignments/sample-assignment">Sample Assignment</Link></li>
      </ul>
    </div>
  );
};

export default Assignments;
