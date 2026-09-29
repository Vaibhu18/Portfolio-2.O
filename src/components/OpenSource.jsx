import OpenSourceCard from "./OpenSourceCard";
import { PULLREQUESTS } from "@/lib/OpenSource";
import SectionHeading from "./ui/SectionHeading";

const OpenSource = () => {
  return (
    <section id="opensource" className="section">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Open Source"
          title="Contributing back."
          subtitle="Active community contributions to developer tools and open ecosystem repositories."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PULLREQUESTS.map((pr) => (
            <OpenSourceCard key={pr.id} data={pr} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
