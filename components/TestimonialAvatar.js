export default function TestimonialAvatar({ name = 'User', size = 56, bgColor = '#1a1a1a', textColor = '#ffffff' }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: bgColor,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: `${size * 0.4}px`,
      flexShrink: 0, // Prevent shrinking in flex containers
    }}>
      {initials}
    </div>
  );
}
