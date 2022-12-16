export default function getButtonStyles({ isLight }) {
  return (
    {
      color: isLight ? '#00bcaa' : 'white',
      backgroundColor: isLight ? 'white' : '#00bcaa',
      padding: '1em 2.5em',
      borderRadius: '50px',
      fontSize: '12px',
      fontWeight: 900,
      marginBottom: 0,
      display: 'inline-block',
      border: 0,
      textTransform: 'uppercase',
      cursor: 'pointer',
    }
  );
}
