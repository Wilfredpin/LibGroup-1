import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import comment1 from "../Images/Pexels Photo by Parth Shah.png";
import Seuss from "../Images/unsplash_oB2aEeE8s4A.png";
import Jess from "../Images/Jessis.png";
import Law from "../Images/Law.png";

const cardData = [
  {
    imgSrc: comment1,
    title: "HOOKED - NIR EYAL",
    commentBy: "Rudolph",
    commentText:
      "A guide for the production and design of business produce and goals.",
    commentImg: "path/to/commenter1.jpg",
  },
  {
    imgSrc: Seuss,
    title: "OPEN-ENDED MATHS ACTIVITIES - PETER SULLIVAN",
    commentBy: "Alice",
    commentText:
      "The provision of practical strategies and tasks to improve critical thinking in mathematics.",
    commentImg: "path/to/commenter2.jpg",
  },
  {
    imgSrc: Jess,
    title: "GETTING TO KNOW JESUS - PST. YEDI ADAMS",
    commentBy: "Bob",
    commentText:
      "Taking a deep look into the life, death and redemption of Christ.",
    commentImg: "path/to/commenter3.jpg",
  },
  {
    imgSrc: Law,
    title: "THE LAW - KINGSLEY TYRONE",
    commentBy: "Charlie",
    commentText: "Opening the mind of youths to the ways of the world.",
    commentImg: "path/to/commenter4.jpg",
  },
];

const MyComponent = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.commentText}</Card.Text>

              <div className="dp">
                <img src={card.commentImg} alt={card.commentBy} />
                <div className="cmm">
                  <h6>Comment by</h6>
                  <p>{card.commentBy}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MyComponent;
