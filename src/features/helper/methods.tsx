import { FaRegStar, FaStar } from "react-icons/fa";

export function StarRating({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="star" />);
    } else {
      stars.push(<FaRegStar key={i} className="star empty" />);
    }
  }

  return <div className="flex gap-1 text-xl text-primary">{stars}</div>;
}
