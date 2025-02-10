import { Link, useLocation } from "react-router-dom";

interface HeaderLinkProps {
  path: string;
  label: string;
}

export default function HeaderLink({ path, label }: HeaderLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`transition-colors duration-300 ${
        isActive
          ? "text-lg font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text "
          : "text-lg font-semibold hover:text-green-400"
      }`}
    >
      {label}
    </Link>
  );
}
