import CertificateGallery from "@/components/CertificateGallery";
import PageHeader from "@/components/ui/PageHeader";
import { CERTIFICATES } from "@/lib/Certificates";

export const metadata = {
  title: "Certificates",
  description:
    "Programming competition ranks, technical recognitions, and professional certifications earned by Vaibhav Shinde.",
};

const CertificatesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow={`Credentials · ${CERTIFICATES.length} total`}
        title={
          <>
            Certificates & <span className="serif-accent text-brand">achievements</span>.
          </>
        }
        subtitle="A complete archive of state and national level programming competitions, technical seminar ranks, and professional accreditations."
      />
      <section className="container-page pb-24">
        <CertificateGallery clampText={false} />
      </section>
    </>
  );
};

export default CertificatesPage;
