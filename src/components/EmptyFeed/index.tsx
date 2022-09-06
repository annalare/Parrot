import { Container } from "react-bootstrap";
import "./emptyfeed.scss";
export default function Timeline() {
  return (
    <div>
      <Container
        className=" containerTimeline h-100 w-75 d-flex align-itens-center 
        justify-content-center"
      >
        <div className="feedUserTimeline">
          <img
            className="parrotOpaco"
            width="200px"
            src="/assets/img/iconeopaco.png"
          />
          <p>Você ainda não fez nenhuma publicação :(</p>
        </div>
      </Container>
    </div>
  );
}
