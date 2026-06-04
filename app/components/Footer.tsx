import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";

const Footer = () => {
  return (
    <>
      <div className="registerBtn">
        <NpfPopup
          formId={`a6a4305c7514b2facc46528871e79634`}
          btnClass={` npfWidget-a6a4305c7514b2facc46528871e79634`}
          btnText={`Register Now`}
          showIcon={false}
        />
      </div>
      <div className="downloadBtns">
        <CommonLeadPopup
          buttonText={"Download Brochure"}
          buttonClassName=""
          redirectUrl={"https://launchpad.krmangalam.edu.in/launchpad2026-brochure.pdf"}
          form_name="Download Brochure"
        />
      </div>
    </>
  );
};

export default Footer;
