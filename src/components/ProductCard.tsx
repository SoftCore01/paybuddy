import type { CardProps } from "../utils";
function ProductCard({ img, h3_text, p_text }: CardProps) {
  return (
    <div className="w-full">
      <div>
        <img className="w-full" src={img} alt="product img" />
      </div>
      <h3>{h3_text}</h3>
      <p>{p_text}</p>
    </div>
  );
}

export default ProductCard;
