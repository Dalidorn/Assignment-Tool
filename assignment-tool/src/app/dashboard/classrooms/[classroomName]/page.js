export default function ClassroomDetails({ params }) {
    return (
        <div>
            <h1>{params.classroomName}</h1>
            <p>Overview for this particular class.</p>
        </div>
    );
  };