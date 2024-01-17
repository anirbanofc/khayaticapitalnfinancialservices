import image from "../Image/USLOAN.png";
import businessloan from "../Image/Businessloan.jpg";
import USLOAN from "../Image/USLOAN.png";
import SLOAN from "../Image/SLOAN.png";
import fundimg from "../Image/fund.jpg";
import nonfundimg from "../Image/nonfund.jpg";
import { FaArrowRight } from "react-icons/fa6";

let services = [
  {
    type: "SECURED AND UNSECURED BUSINESS LOAN FROM PVT SOURCE",
    img: "https://cdn-icons-png.flaticon.com/512/2037/2037252.png",
    desc: "NPA FUNDING, CIBIL ISSUE  CASE FOR ONLY BUSINESS LOAN ,  BANK GUARANTEE LETTER OF CREDIT LOAN AGAINST SHARE JOINT VENTURE, BILL DISCOUNTING ",
  },
  // {
  //   type: "Unsecurd loan",
  //   img: image,
  //   desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  // },
];

let loan = [
  {
    type: "Secured loan",
    img: SLOAN,
    desc: "Secured loan we provide to the customer it is based on customer's profile some examples of secured loan are mortgage loan, project loan etc..",
  },
  {
    type: "Unsecured loan",
    img: USLOAN,
    desc: "We also  authorised Trade Finance Specialist ' in  India of Euro Exim Bank for the following Unsecured Trade Finance products: Our USP is no interest nor margin money nor hard collateral requirement. Only one time issuance fees is payable after acceptance of draft by beneficiary and their bank.",
  },
];

let fund = [
  {
    type: "FUND BASED",
    desc: [
      { service: "Off-Shore Banking Services-( Corporates & Individual" },
      { service: "Payment Gateway(Exim-wave)- for Merchant Account" },
      { service: "Escrow Services" },
      { service: "Virtual Visa/Master & Charge Cards" },
      { service: "Correspondent Banking Services" },
      { service: "Money Remitting Services" },
    ],
    fundimg: fundimg,
  },
  { type: "NON FUND BASED", desc: [
    { service: "Letter of Credit- MT 710- For Importers & Traders" },
    { service: "Bank Guarantee- MT 760" },
    { service: "Standby Letter of Credit- SBLC-(MT760/799)" },
    { service: "Ready Willing and Able Services" },
    { service: "Blocked Funds and Proof of Funds" },
    { service: "Bank Comfort Letter" },
  ], 
  fundimg:nonfundimg },
];
export { services, loan, fund };
