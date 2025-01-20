import Button from "react-bootstrap/Button";

function ActiveExample() {
  return (
    <>
      <div className="host">
        <Button variant="primary" size="lg" active>
          Start For Free
        </Button>
        <Button variant="secondary" size="lg" active>
          Login
        </Button>
      </div>
    </>
  );
}

export default ActiveExample;
