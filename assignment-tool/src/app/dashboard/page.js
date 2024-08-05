import Link from 'next/link';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/dashboard/settings">Settings</Link></li>
          <li><Link href="/dashboard/submit">Submit</Link></li>
          <li><Link href="/dashboard/create">Create</Link></li>
          <li><Link href="/dashboard/assignments">Assignments</Link></li>
          <li><Link href="/dashboard/classrooms">Classrooms</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
