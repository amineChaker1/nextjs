import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import React, { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      {" "}
      <Repo name={name} />
      <Suspense fallback={<div> Loading Dirs... </div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
