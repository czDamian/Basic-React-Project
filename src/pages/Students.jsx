const StudentDetails = (props) => {
  return (
    <div className="border p-2 rounded m-2 bg-gray-900 hover:bg-gray-800">
      <div className="">
        <p>Full Name: {props.name}</p>
        <p>Experience: {props.experience} years</p>
        <p>Nationality: {props.country}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
