import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 352px;
  margin-right: 20px;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const MovieName = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const MovieInfo = styled.span`
  font-size: 16px;
  color: black;
  margin: 4px 0;
  text-transform: capitalize;
`;

const Close = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 10px;

  &:hover {
    color: red;
  }
`;

const MovieInfoComponent = ({ selectedMovie, onMovieSelect }) => {
  const { Title, Year, Poster, imdbRating, Rated, Released, Runtime, Genre, Director, Actors, Plot } = selectedMovie;

  return (
    <InfoContainer>
      <CoverImage src={Poster} alt={Title} />
      <InfoColumn>
        <Close onClick={() => onMovieSelect(null)}>X</Close>
        <MovieName>{Title}</MovieName>
        <MovieInfo><strong>IMDB Rating:</strong> {imdbRating}</MovieInfo>
        <MovieInfo><strong>Year:</strong> {Year}</MovieInfo>
        <MovieInfo><strong>Rated:</strong> {Rated}</MovieInfo>
        <MovieInfo><strong>Released:</strong> {Released}</MovieInfo>
        <MovieInfo><strong>Runtime:</strong> {Runtime}</MovieInfo>
        <MovieInfo><strong>Genre:</strong> {Genre}</MovieInfo>
        <MovieInfo><strong>Director:</strong> {Director}</MovieInfo>
        <MovieInfo><strong>Actors:</strong> {Actors}</MovieInfo>
        <MovieInfo><strong>Plot:</strong> {Plot}</MovieInfo>
      </InfoColumn>
    </InfoContainer>
  );
};

export default MovieInfoComponent;

