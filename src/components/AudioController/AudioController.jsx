export default function AudioController({ src }) {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
}
