import React, { useContext } from "react";
// import { Films } from "../shared/ListOfFilms";
import {
  Card,
  CardTitle,
  Col,
  Container,
  Icon,
  Row,
  Section,
} from "react-materialize";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export default function FilmsPresentation({ Films }) {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Section>
      <Container>
        <Row>
          {Films.map((film) => (
            <Col key={film.id} m={4} s={12}>
              <Card
                className="film_card"
                closeIcon={<Icon>close</Icon>}
                header={
                  <CardTitle image={film.img} reveal waves="light"></CardTitle>
                }
                reveal={<p>{film.nation}</p>}
                revealIcon={<Icon>more_vert</Icon>}
                title={film.name}
              >
                <Link to={`detail/${film.id}`}>Detail</Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
