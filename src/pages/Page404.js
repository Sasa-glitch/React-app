import { Link } from "react-router-dom"

export default function Page404() {
  return (
    <>
      <h1>This is 404 not found</h1>
      <Link to="/employees">This will take you home</Link>
    </>
  )
}