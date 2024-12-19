import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    console.log(word)
  }, [word])

  return (
    <form
      className="flex space-x-2 max-w-[300px]"
      onSubmit={() => {
        navigate(`/Dictionary/${word}`)
      }}>
      <input type="text" value={word}
        onChange={(e) => {
          const { value } = e.target;
          setWord(value);
        }}
        placeholder="Write a word"
        className="px-2 py-1 shrink min-w-0 rounded shadow" />
      <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded">search</button>
    </form>
  )
}