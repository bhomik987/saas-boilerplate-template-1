export default function TestimonialRating({ rating = 5, maxRating = 5, starColor = '#1a1a1a', emptyStarColor = '#eeeeee', size = '1.25rem', style = {} }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', ...style }}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? starColor : emptyStarColor, fontSize: size, marginRight: '0.1rem' }}>★</span>
      ))}
    </div>
  );
}
