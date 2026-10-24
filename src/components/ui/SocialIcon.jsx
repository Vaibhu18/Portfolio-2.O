import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  hackerrank: SiHackerrank,
};

export default function SocialIcon({ id, size = 16, className }) {
  const Icon = ICONS[id];
  return Icon ? <Icon size={size} className={className} aria-hidden="true" /> : null;
}
