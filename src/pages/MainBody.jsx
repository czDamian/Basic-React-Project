import StudentDetails from "./Students";
function MainBody() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl bg-blue-600 p-3 mb-10">
        Student Profile
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <StudentDetails exp={2} name="John Doe" country="Nigeria" />
        <StudentDetails exp={12} name="Peter Doe" country="USA" />
        <StudentDetails exp={4} name="Mike Doe" country="Cameroon" />
        <StudentDetails exp={42} name="Yua Met" country="Argentina" />
      </div>
    </div>
  );
}

export default MainBody;
