import StudentDetails from "./Students";
function MainBody() {
  return (
    <div className="bg-dark text-light">
      <div className="container p-2 m-3">
        <div className="row">Student Details</div>

        <StudentDetails experience={2} name="John Doe" country="Nigeria" />
        <StudentDetails experience={12} name="Peter Doe" country="USA" />
        <StudentDetails experience={4} name="Mike Doe" country="Cameroon" />
        <StudentDetails experience={42} name="Yua Met" country="Argentina" />
      </div>
    </div>
  );
}

export default MainBody;
