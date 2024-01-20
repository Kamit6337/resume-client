const Footer = () => {
  const openTwitterPage = () => {
    // Replace 'https://twitter.com/your_username' with your Twitter profile URL
    const twitterUrl = "https://twitter.com/kamit6337";
    window.open(twitterUrl, "_blank");
  };
  const sendEmail = () => {
    // Replace 'recipient_email@gmail.com' with the recipient's email address
    const recipientEmail = "amitwick007@gmail.com";

    // Replace 'subject' and 'body' with your desired email subject and body
    const emailSubject = "Subject of the email";
    const emailBody = "Body of the email";

    // Construct the mailto link for Gmail
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in a new tab
    window.open(mailtoLink, "_blank");
  };

  const year = new Date().getFullYear();

  return (
    <div className="w-full h-full flex flex-col justify-between items-center  text-white">
      <div className="my-auto">
        <p className="px-8 py-3 rounded-xl cursor-pointer shadow-xl border border-white">
          Contact Me
        </p>
        {/* <p className="text-sm mt-6 mb-3 text-gray-500 text-center">or via</p>
        <div className="w-full flex justify-center gap-4 ">
          <p className="cursor-pointer" onClick={openTwitterPage}>
            <ReactIcons.twitter className="" />
          </p>
          <p className="cursor-pointer">
            <a
              href="mailto:kamit6337@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <ReactIcons.email className="" />
            </a>
          </p>
        </div> */}
      </div>

      <p className="self-center mb-4 text-xs text-gray-500">
        {`Copyright ©${year} All rights reserved`}
      </p>
    </div>
  );
};

export default Footer;
