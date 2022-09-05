import { Container } from "react-bootstrap";
import "./timeline.scss";
export default function Timeline() {
  return (
    <div>
      <Container>
        <div className="feedUserTimeline">
          <img
            className="parrotOpaco"
            width="200px"
            src="/assets/img/iconeopaco.png"
          />
        </div>
      </Container>
    </div>
  );
}
