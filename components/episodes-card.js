import React from "react";

export const EpisodesCard = ({ name, air_date, episode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span>{name}</span>
      <span>{air_date}</span>
      <span>{episode}</span>
    </div>
  );
};