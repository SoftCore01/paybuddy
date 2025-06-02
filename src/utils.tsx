export interface CardProps {
  img: string;
  h3_text: string;
  p_text: string;
};

export interface TestimonialProps extends CardProps {
  description: string;
}