import { profile } from "../data";
import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

export default function Sidebar({ active, activeProjectId }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>
        <Nav active={active} activeProjectId={activeProjectId} />
      </div>
      <SocialIcons />
    </header>
  );
}
