import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CERTIFICATES } from "@/lib/Certificates";
import SectionHeading from "./ui/SectionHeading";
import CertificateGallery from "./CertificateGallery";

const Certificates = () => {
  return (
    <section id="certificates" className="section">
      <div className="container-page">
        <SectionHeading
          index="07"
          label="Achievements"
          title={
            <>
              Certificates & <span className="serif-accent text-brand">recognition</span>.
            </>
          }
          subtitle="Competitive coding ranks, hackathon recognitions, and verified professional engineering accreditations."
          action={
            <Link href="/certificates" className="btn btn-secondary group">
              View all {CERTIFICATES.length}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          }
        />

        <CertificateGallery limit={6} />
      </div>
    </section>
  );
};

export default Certificates;
