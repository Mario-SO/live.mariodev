import MuxPlayer from "@mux/mux-player-react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "live.mariodev" },
    { name: "description", content: "Personal livestreaming site for @mariodev" },
  ];
};

export default function Index() {
  return (
    <MuxPlayer
      className="w-full h-full"
      playbackId="a4nOgmxGWg6gULfcBbAa00gXyfcwPnAFldF8RdsNyk8M"
      metadata={{
        video_id: "video-id-54321",
        video_title: "Test video title",
        viewer_user_id: "user-id-007",
      }}
    /> 
  );
}
