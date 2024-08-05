import Link from 'next/link';

const Classrooms = () => {
  return (
    <div>
      <h1>Classrooms</h1>
      <p>All classrooms attached to the account.</p>
      <ul>
        <li><Link href="/dashboard/classrooms/sample-classroom">Sample Classroom</Link></li>
      </ul>
    </div>
  );
};

export default Classrooms;
