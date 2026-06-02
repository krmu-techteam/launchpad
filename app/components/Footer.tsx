import CommonLeadPopup from "./CommonLeadup";
import NpfPopup from "./form/NpfPopup";

const Footer = () => {
  return (
    <>
      <div className="registerBtn">
        <NpfPopup
          formId={`bc75880ade367265cef841c19ef47621`}
          btnClass={` npfWidget-bc75880ade367265cef841c19ef47621`}
          btnText={`Register Now`}
          showIcon={false}
        />
      </div>
      <div className="downloadBtns">
        <CommonLeadPopup
          buttonText={"Download Brochure"}
          buttonClassName=""
          redirectUrl={"https://launchpad.krmangalam.edu.in/launchpad-brochure.pdf"}
          form_name="Download Brochure"
        />
      </div>
    </>
  );
};

export default Footer;
