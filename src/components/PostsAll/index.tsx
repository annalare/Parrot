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
        <Card id="card" className=" w-75 shadow-sm">
          <Card.Body className=" d-flex w-100 justify-content-start p-4 d-flex">
            <Card.Img
              src="../assets/img/profile2.png"
              alt="perfil"
              className="perfil-img"
            />
            <Card.Text className="d-flex flex-column px-4 w-100">
              <div className="userStatus d-flex flex-column">
                <h4 className="">
                  <Link className="link" to={`/profile/${id}`}>
                    {`${name} - apê ${apartment}`}
                  </Link>
                </h4>
                <div className="d-flex flex-column">
                  <p className="hora">{formataData(new Date(created_at))}</p>
                </div>
                <span className="d-flex w-100">{content}</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
