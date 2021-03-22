/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from "react";

import {
  Container,
  EffectVertical,
  EffectHorizontal,
  Name,
  Info,
  Poins,
  LancedDate,
  Description,
  Seasons,
  BtnMyList,
  BtnPlay,
  Buttons,
  Genres,
} from "./styles";

const Featured = ({ movie }) => {
  let genres = [];
  movie.genres.forEach((genre) => genres.push(genre.name));

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <EffectVertical>
        <EffectHorizontal>
          <Name>{movie.original_name}</Name>
          <Info>
            <Poins>{movie.vote_average}</Poins>
            <LancedDate>{movie.first_air_date}</LancedDate>
            <Seasons className="movie--seasons">
              {movie.number_of_seasons} temporada
              {movie.number_of_seasons !== 1 ? "s" : ""}
            </Seasons>
          </Info>
          <Description>{movie.overview}</Description>
          <Buttons>
            <BtnPlay href={`/watch/${movie.id}`}>► Assistir</BtnPlay>
            <BtnMyList primary href={`/list/add/${movie.id}`}>
              + Minha Lista
            </BtnMyList>
          </Buttons>
          <Genres>
            <strong>Gêneros: </strong>

            {genres.join(", ")}
          </Genres>
        </EffectHorizontal>
      </EffectVertical>
    </Container>
  );
};

export default Featured;
