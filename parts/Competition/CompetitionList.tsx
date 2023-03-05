"use client";
import React from "react";
import type { CompetitionType } from "~/types/competition/CompetitionType";
import { useSupabase } from "~/components/Supabase/SupabaseProvider";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Competition from "./Competition";
type CompetitionListProps = {
  competition: CompetitionType[];
};

const CompetitionList = (props: CompetitionListProps) => {
  const { session } = useSupabase();
  return (
    <div className="flex flex-col gap-6 max-w-screen-lg mx-auto mt-8">
      <div className={"flex flex-row items-center justify-between"}>
        <span className="text-sm md:text-xl text-slate-100 font-medium">
          Discover Competition
        </span>
        <Link href={"/competition/request"} className="btn btn-primary">
          <FaPlus className="inline text-lg" />{" "}
          <div className="text-base">Request</div>
        </Link>
      </div>
      {session === null ? (
        <div className={"flex flex-col gap-4 mt-4 justify-center items-center"}>
          <h1 className={"text-gray-200 font-bold text-center text-4xl "}>
            You have to{" "}
            <Link className={"hover:underline"} href={"/login"}>
              Login
            </Link>{" "}
            First to See the Competition
          </h1>
        </div>
      ) : (
        <div
          className={
            "flex flex-wrap gap-4 mt-2 relative justify-center items-center"
          }
        >
          {props.competition.map((competition) => (
            <Competition key={competition.id} {...competition} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompetitionList;
