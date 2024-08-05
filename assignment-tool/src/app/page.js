import Link from 'next/link';

const Landing = () => {
  return (
    <div>
      <h1 className="pageTitle">Assignment Tool App!</h1>
      <p>Introduction to the app and call to action buttons.</p>
      <Link href="/account">Get Started</Link>
      <Link href="/dashboard">Skip to Demo Dashboard</Link>
    </div>
  );
};

export default Landing;