import React from "react";
import Link from "next/link";

type text = {
  title: string
}

const TermsSection: React.FC <text> = ({title}) => {
  return (
    <div className={"max-w-xl"}>
      <p className={"text-gray-500 text-sm text-center"}>
        By clicking <span className={"font-semibold"}>{title}</span>, you accept the <Link href={"/terms"} className={"hover:underline cursor-pointer"}>terms and conditions</Link> of the Polinema Innovation Tribe.
      </p>
    </div>
  )
}

export default TermsSection