"use client";
import COMPETITION from "~/data/competition/Competition";
import TAGS from "~/data/competition/Tags";
import CompetitionList from "~/parts/Competition/CompetitionList";
import Header from "~/parts/Competition/Header";
import TagList from "~/parts/Idea/Index/TagList";
import { selectCompetition } from "~/services/competition/select-competition";
import { useEffect } from "react";
import { useSupabase } from "../../../components/Supabase/SupabaseProvider";

export default  function CompetitionPage() {
  const { supabase } = useSupabase();
  useEffect(() => {
    async function fetchCompetition() {
      const { data, error } = await supabase.from("competitions").select("*");
      console.log(data, error);
    }

    fetchCompetition().then((r) => console.log(r)).catch((e) => console.log(e));
  }, [supabase]);
  
  return (
    <div>
      <section className="w-full h-full pt-1 md:pt-8 relative">
        <Header />
        <TagList tags={TAGS} />
        <CompetitionList competition={COMPETITION} />
      </section>
    </div>
  );
}
