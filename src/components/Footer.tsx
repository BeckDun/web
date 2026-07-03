import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8">
        <SocialIcons className="h-6 w-6" />
        <p className="font-mono text-xs text-fog">
          © {new Date().getFullYear()} Beckett Dunlavy
        </p>
      </div>
    </footer>
  );
}
