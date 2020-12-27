import video from '../videos/EnchantedIllegalAzurevasesponge-mobile.mp4';

export default function BgVideo() {
  return (
    <video autoPlay loop muted className="bg-video">
      <source src={ video } type="video/mp4" />
    </video>
  );
}
