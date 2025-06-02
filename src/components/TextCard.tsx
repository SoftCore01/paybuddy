import type { CardProps } from "../utils";
function TextCard({ img, h3_text, p_text }: CardProps) {
  return (
    <div className="card">
      <div>
        <img src={img} alt="" />
      </div>
      <h3>{h3_text}</h3>
      <p>{p_text}</p>
    </div>
  );
}

export default TextCard;
