const StudentDetails = (props) => {
  return (
    <div className="border border-blue-300 p-2 rounded m-2 bg-gray-900 hover:bg-gray-800">
      <div>
        <p>Full Name: {props.name}</p>
        <p>Experience: {props.exp} years</p>
        <p>Nationality: {props.country}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
