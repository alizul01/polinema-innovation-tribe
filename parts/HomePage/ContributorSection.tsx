import React from 'react';

type Contributor = {
  name: string,
  avatarUrl: string,
  githubUrl: string,
  jobDesc: string,
}

type ContributorSectionProps = {
  contributors: Contributor[],
}

const ContributorSection: React.FC<ContributorSectionProps> = ({contributors}) => {
  return (
    <section className={"py-px flex flex-col justify-center items-center"}>
      <div className={"flex justify-center items-center gap-4 flex-col md:flex-col"}>
        <h1 className={"text-slate-500 text-center font-semibold"}>
          Build by
        </h1>
        <div className={"flex-row gap-6 flex flex-wrap justify-center"}>
          {contributors.map((contributors, index) => (
            <a href={contributors.githubUrl} target={"_SEJ"} rel={"noopener"}>
              <div className={"text-white flex gap-3 items-center"}>
                <div className={"bg-slate-300 w-fit p-1 rounded-full"}>
                  <img className={"min-w-[2rem]s max-w-[2.5rem] rounded-full"} src={contributors.avatarUrl} />
                </div>
                <div>
                  <h4 className={"font-bold text-md"}>{contributors.name}</h4>
                  <p className={"text-xs italic"}>{contributors.jobDesc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div>
        <a className={"font-regular text-xs text-slate-500"}>and other creative people... </a>
      </div>
    </section>
  )
}

export default ContributorSection;