export default function Employee(props) {
  return (
    <>
      <h3>This is an Employee {props.name}!</h3>
      <p>{props.role ? props.role : "no role"}</p>

    </>
  )
}