import Link from "next/link";

function Navitem({ text, url }) {
  return (
    <div className={"flex items-center "}>
      <Link href={url}>
        <h3 className="text-sm font-semibold uppercase cursor-pointer text-primary font-['WorkSons'] ">
          {text}
        </h3>
      </Link>
    </div>
  );
}

export default Navitem;
