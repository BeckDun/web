import {
  siApple,
  siClaude,
  siCplusplus,
  siGit,
  siGithub,
  siGithubcopilot,
  siGitlab,
  siGnubash,
  siGoogle,
  siJupyter,
  siKubernetes,
  siLatex,
  siLinux,
  siNvidia,
  siOpenai,
  siOpenjdk,
  siPython,
  siTesla,
  type SimpleIcon,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  apple: siApple,
  claude: siClaude,
  cplusplus: siCplusplus,
  git: siGit,
  github: siGithub,
  githubcopilot: siGithubcopilot,
  gitlab: siGitlab,
  gnubash: siGnubash,
  google: siGoogle,
  jupyter: siJupyter,
  kubernetes: siKubernetes,
  latex: siLatex,
  linux: siLinux,
  nvidia: siNvidia,
  openai: siOpenai,
  openjdk: siOpenjdk,
  python: siPython,
  tesla: siTesla,
};

export function brandColor(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  const icon = icons[slug];
  if (!icon) return undefined;
  // Near-black brand colors (GitHub, Apple) disappear on the dark theme,
  // so fall back to the surrounding text color, which adapts per theme.
  const r = parseInt(icon.hex.slice(0, 2), 16);
  const g = parseInt(icon.hex.slice(2, 4), 16);
  const b = parseInt(icon.hex.slice(4, 6), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 60 ? "currentColor" : `#${icon.hex}`;
}

type Props = {
  slug: string;
  className?: string;
  /** override fill; defaults to the brand color */
  color?: string;
};

export default function BrandIcon({ slug, className, color }: Props) {
  const icon = icons[slug];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      className={className}
      fill={color ?? brandColor(slug)}
    >
      <path d={icon.path} />
    </svg>
  );
}
