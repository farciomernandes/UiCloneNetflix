/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import {
  ArrowLeft,
  Container,
  ArrowRight,
  SlideShowMovies,
  SlideShowList,
  SlideShowCard,
} from "./styles";

const SlideShow = ({ title, items }) => {
  const [scroll, setScroll] = useState(-400);

  const scrollToRight = () => {
    let x = scroll - Math.round(window.innerWidth / 2);
    const view = items.results.length * 150;
    if (window.innerWidth - view > x) {
      x = window.innerWidth - view - 60;
    }
    setScroll(x);
  };
  const scrollToLeft = () => {
    // eslint-disable-next-line no-multi-assign
    let x = scroll + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScroll(x);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <ArrowLeft>
        <span>
          <NavigateBeforeIcon style={{ fontSize: 50 }} onClick={scrollToLeft} />
        </span>
      </ArrowLeft>

      <ArrowRight>
        <span>
          <NavigateNextIcon style={{ fontSize: 50 }} onClick={scrollToRight} />
        </span>
      </ArrowRight>

      <SlideShowMovies>
        <SlideShowList
          style={{
            marginLeft: scroll,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((movie, key) => (
              <SlideShowCard key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </SlideShowCard>
            ))}
        </SlideShowList>
      </SlideShowMovies>
    </Container>
  );
};

export default SlideShow;
