const Account = () => {
  return (
    <div>
      <h1>Account</h1>
      <p>Login/Signup forms will be here with info on types of accounts/roles</p>
      

      <h2>Account Types</h2>
      <ul>
        <li>Admins - Oversight user. Focus on viewing teacher's content/interactions</li>
        <li>Teachers - Primary users. Focus on creating classrooms and assignments</li>
        <li>Students - Secondary users. Focus on viewing and submitting assignments</li>
        <li>Parents - Oversight user. Focus on viewing a specific student's interactions</li>
        <li>Mixed Role - Combo of any of the above.</li>
      </ul>
    </div>
  );
};

export default Account;
