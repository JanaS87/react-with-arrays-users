import "./Tag.css";

export default function Tag({ tag }) {
  const isAdmin = tag === "admin";
  const tagClassName = isAdmin ? "tag Tag--highlight" : "tag";
  return <li className={tagClassName}>{tag}</li>;
}
