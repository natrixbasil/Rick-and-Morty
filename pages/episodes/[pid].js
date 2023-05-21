import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EpisodeProfile() {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    router.query.pid &&
      fetch(`https://rickandmortyapi.com/api/episode/${router.query.pid}`)
        .then((res) => res.json())
      // Логика, если персонажи будут приходить массивом IRI
        .then(async (res) => {
          if (res.character?.length) {
            await fetch(
              `https://rickandmortyapi.com/api/character/${res.character
                .map((character) => character.split("/").pop())
                .join(",")}`
            )
              .then((res) => res.json())
              .then((characters) => {
                console.log(characters)
                res.character = Array.isArray(characters) ? characters : [characters]
              });
          }

          return res;
        })
        .then((res) => setData(res));
  }, [router.query]);

  console.log(data);

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h1>{data.name}</h1>
        <div style={{ display: "grid", gridColumn: 2, gap: "10px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>Information</h3>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>Characters</h3>
            {data.character?.map((episode) => (
              <Link key={episode.id} href={`/characters/${character.id}`}>
                <div>
                  <p>{character.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
