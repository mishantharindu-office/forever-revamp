import Link from "next/link";

function HeaderIcon({ Icon, path }) {
  return (
    <div className="relative">
      <Link href={path}>
        <Icon className="h-6 mx-4 cursor-pointer text-primary" />
      </Link>
    </div>
  );
}

export default HeaderIcon;
