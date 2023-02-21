import type { Idea } from "~/types/Idea/Index/Idea";
import { ProfileSidebar } from "~/components/ProfileSidebar";

export default function IdeaSidebar(props: Idea) {
  return (
    <div className="sidebar">
      <ProfileSidebar {...props.author} />
    </div>
  );
}
