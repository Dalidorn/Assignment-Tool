export default function User({ params }) {
    return (
        <div>
            <h1 className="pageTitle">User: {params.user}</h1>
            <p>Details and options for this user, dynamic based on role.</p>
        </div>
    );
};