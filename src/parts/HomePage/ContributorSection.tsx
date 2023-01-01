import React from 'react';

type Inisiator = {
  name: string,
  avatarUrl: string,
  githubUrl: string,
  jobDesc: string,
}

type InisiatorSectionProps = {
  inisiators: Inisiator[],
}

const ContributorSection: React.FC<InisiatorSectionProps> = ({inisiators}) => {
  return (
    <section className={"py-px flex flex-col justify-center items-center"}>
      <div className={"flex justify-center items-center gap-4 flex-col md:flex-row"}>
        <h1 className={"text-slate-500 text-center font-semibold"}>
          Build by
        </h1>
        <div className={"flex-col md:flex-row gap-6 flex flex-wrap justify-center"}>
          {inisiators.map((inisiator, index) => (
            <div className={"text-white flex gap-3 items-center"}>
              <div className={"bg-slate-300 w-fit p-1 rounded-full"}>
                <img className={"min-w-[2rem]s max-w-[2.5rem] rounded-full"} src={inisiator.avatarUrl} />
              </div>
              <div>
                <h4 className={"font-bold text-md"}>{inisiator.name}</h4>
                <p className={"text-xs italic"}>{inisiator.jobDesc}</p>
              </div>
            </div>
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