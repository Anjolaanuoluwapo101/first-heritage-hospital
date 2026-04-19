import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface Props {
  src: string;
  poster?: string;
}

export const CustomVideoPlayer = ({ src, poster }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onTime = () => setProgress((v.currentTime / (v.duration || 1)) * 100);
    const onEnd = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = ref.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  const fullscreen = () => {
    const v = ref.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  return (
    <div className="relative bg-foreground border border-foreground group">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        playsInline
        className="w-full aspect-video object-cover cursor-pointer"
        onClick={toggle}
      />

      {/* Center play overlay */}
      {!playing && (
        <button
          onClick={toggle}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-foreground/30 hover:bg-foreground/40 transition-colors"
        >
          <span className="flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground border border-background">
            <Play className="h-8 w-8 ml-1" />
          </span>
        </button>
      )}

      {/* Controls bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground/90 text-background p-4 flex items-center gap-4">
        <button onClick={toggle} aria-label={playing ? "Pause" : "Play"} className="hover:text-primary transition-colors">
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>

        <div
          onClick={seek}
          className="flex-1 h-1 bg-background/30 cursor-pointer relative"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
        >
          <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
        </div>

        <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="hover:text-primary transition-colors">
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
        <button onClick={fullscreen} aria-label="Fullscreen" className="hover:text-primary transition-colors">
          <Maximize className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
