import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ActiveExample() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
  };

  return (
    <>
      <div className="host">
        <Button
          variant="primary"
          size="lg"
          active
          onClick={() => handleClick("/blank")}
        >
          Become a Creator
        </Button>
        <Button
          variant="secondary"
          size="lg"
          active
          className="custom-login-button"
          onClick={() => handleClick("/target")}
        >
          Start Reading
        </Button>
      </div>
    </>
  );
}

export default ActiveExample;
