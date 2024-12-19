import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useParams, useNavigate } from "react-router-dom";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [noun, setNoun] = useState(undefined);
  const [verb, setVerb] = useState(undefined);
  const [word, setWord] = useState(undefined);

  const navigate = useNavigate()

  let { search } = useParams();
  console.log(useParams());
  console.log(search);
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(res => {
        console.log(res.status)
        if (!res.ok) {
          switch (res.status) {
            case 401:
              navigate('/login');
              break;
            default:
              navigate(`/*`)
          }
        }
        return res.json()
      })
      .then(data => {
        setNoun(data[0].meanings[0].definitions)
        setVerb(data[0].meanings[1].definitions)
        setWord(data[0].word)
      }
      )
      .catch(error => console.log("Error: " + error))
  }, [search, navigate])

  return (
    <>
      <h1>This is a definition: {word}</h1>
      <h2>Noun definitions:</h2>
      {noun ?
        noun.map(mean => {
          return <p key={v4()}>{mean.definition}</p>
        })
        : "No noun definition available"}

      <h2>Verb definitions:</h2>
      {verb ? verb.map(mean => {
        return <p key={v4()}>{mean.definition}</p>
      })
        : "No verb definition available"}
      <h2>Search again:</h2>
      <DefinitionSearch />
    </>
  )
}