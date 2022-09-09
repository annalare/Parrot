import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formataData } from "../../utils/date";
import "./postsall.scss";

interface Props {
  id: number;
  content: string;
  created_at: Date;
  name: string;
  apartment: number;
}
export default function PostsAll({
  id,
  content,
  created_at,
  name,
  apartment,
}: Props) {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Card id="card" className="d-flex w-75 shadow-sm ">
          <Card.Body className=" d-flex justify-content-around d-flex">
            <Card.Img
              src="../assets/img/profile2.png"
              alt="perfil"
              className="perfil-img pt-2"
            />
            <Card.Text className="details d-flex flex-column">
              <div className="userStatus flex-start">
                <h4>
                  <Link to={`/profile/${id}`}>{name}</Link>
                </h4>
                <p>apê {apartment}</p>
                <p>{formataData(new Date(created_at))}</p>
              </div>
              <span className="d-flex w-50">{content}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
