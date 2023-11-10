import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Image from "react-bootstrap/Image";
import fire from "../../assets/img/flame-icon.svg";
import star from "../../assets/img/feedback-testimonial-icon.svg";

import "react-circular-progressbar/dist/styles.css";
import styles from "./Custom.module.css";

const imageURL = import.meta.env.VITE_IMG;

function Cards({ title, movie }) {
  const votePorcent = (movie.vote_average * 100) / 10;

  return (
    <Card className={styles.cardSpacingCustom}>
      <Link
        to={`/movie/${movie.id}&language=pt-BR&include_image_language=pt-BR`}
      >
        <Card.Img
          variant="top"
          src={imageURL + movie.poster_path}
          alt={movie.title}
        />
        <Card.Body>
          <div className={styles.infoFlexCustom}>
            <div className={styles.infoFlagCustom}>
              <CircularProgressbarWithChildren
                className="divote_average"
                value={votePorcent.toFixed(1)}
              >
                <Image className={styles.iconCardCustom} src={fire} fluid />

                <div className={styles.cardIconText}>
                  <strong>{votePorcent.toFixed(1)}</strong>%
                </div>
              </CircularProgressbarWithChildren>
            </div>

            <div className={styles.secondFlag}>
              <CircularProgressbarWithChildren
                className="divote_count"
                value={movie.vote_count}
              >
                <Image className={styles.iconCardCustom} src={star} fluid />

                <div className={styles.cardIconText}>
                  <strong>{movie.vote_count}</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className={styles.cardDivTitle}>
            <Card.Title className={styles.cardTitle}>
              {title ? title : movie.name}
            </Card.Title>
          </div>
          <div className={styles.infoFlexCustom}>
            {movie.release_date ? (
              <div className={styles.flagbottom}>
                <span>{movie.release_date}</span>
              </div>
            ) : (
              ""
            )}

            <div className={styles.flagbottom}>
              <span>{movie.original_language}</span>
            </div>
            <div className={styles.flagbottom}>
              <span>{movie.popularity} </span>
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default Cards;
