import type { TestimonialProps } from "../utils"

export default function TestimonialCard({img, p_text, h3_text, description}:TestimonialProps) {
    return (
      <div className="card flex flex-col justify-between">
        <p className="text-2xl">{p_text}</p>
        <div className="flex items-center gap-4 justify-center">
          <div className="w-[60px] h-[60px] pt-2">
            <img className="w-full h-full rounded-xl" src={img} alt="" />
          </div>
          <div>
            <h3>{h3_text}</h3>
            <small>{description}</small>
          </div>
        </div>
      </div>
    );
}