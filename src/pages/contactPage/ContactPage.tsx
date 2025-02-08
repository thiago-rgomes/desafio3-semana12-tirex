import HighLightSection from "../../components/HighLight/HighLightSection"
import QualitySection from "../../components/Quality/QualitySection"
import ContactSection from "./ContactSection"


const ContactPage = () => {
  return (
    <div>
      <HighLightSection pageTitle="Contact"></HighLightSection>
      <ContactSection></ContactSection>
      <QualitySection></QualitySection>
    </div>
  )
}

export default ContactPage
