import { useContext, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Container,
  Icon,
  Section,
} from "react-materialize";
import { useParams } from "react-router-dom";
import { Films } from "../shared/ListOfFilms";
import { ModalCase } from "./ModalCase";
import { ThemeContext } from "./ThemeContext";

export default function Detail() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const userName = useParams();
  const film = Films.find((obj) => {
    return obj.id == userName.id;
  });
  return (
    <Section>
      <Container id="film-details">
        {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
        <Card
          className="film-box"
          style={{
            backgroundColor: theme.mutedBackgroundColor,
            color: theme.contentTextColor,
          }}
          // horizontal={largeScreen ? true : false}
          header={
            <CardTitle
              image={`../${film.img}`}
              className="poster hoverable"
              reveal
            ></CardTitle>
          }
        >
          <div
            className="info"
            style={{
              backgroundColor: theme.mutedBackgroundColor,
              color: theme.contentTextColor,
            }}
          >
            {/** Title */}
            <Section>
              <div className="title">
                <h3>{film.name}</h3>
              </div>
            </Section>
            {/* <p>IMDb: {film.Score_IMDb}</p> */}
            <p>Date: {film.year}</p>
            <p>Nation: {film.nation}</p>
            {/* <p>Author: {film.author}</p>
            <p>Type: {film.Type}</p>
            <p>Studio :{film.manufacturer}</p>
            <p>Duration: {film.duration}</p> */}

            <Section
              style={{
                backgroundColor: theme.mutedBackgroundColor,
                color: theme.contentTextColor,
              }}
            >
              {/* <p className="sypnosis" style={{ textAlign: "left" }}>
                Information <br />
                {film.info}
              </p> */}
            </Section>

            {/** video */}
            <Section>
              <Button
                node="button"
                style={{
                  backgroundColor: theme.focusedBackgroundColor,
                  color: theme.focusedTextColor,
                  display: "inline-flex",
                  alignItems: "center",
                }}
                waves="light"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Watch trailer <Icon>play_circle_filled</Icon>
              </Button>
            </Section>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
