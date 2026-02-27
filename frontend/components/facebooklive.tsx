// components/facebooklive.tsx
interface FacebookLiveProps {
  videoId: string;
  width?: number;
  height?: number;
}

export default function FacebookLive({
  videoId,
  width = 560,
  height = 315,
}: FacebookLiveProps) {
  return (
    <iframe
      src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/${videoId}/&show_text=false`}
      width={width}
      height={height}
      style={{ border: "none", overflow: "hidden" }}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}