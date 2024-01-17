import { IoHomeOutline } from "react-icons/io5";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { TbBusinessplan } from "react-icons/tb";


let aboutCardData = [
  // {
  //   Icon: <IoHomeOutline className="aboutIcon" />,
  //   IconLabel: "Home Loan",
  //   Heading: "Home Loan",
  //   Details:
  //     "A home loan is an amount an individual borrows from a financial institution such as a housing finance company to buy a new or a resale home, construct a home or renovate or extend an existing one.",
  // }, 
  {
    Icon: <TbBusinessplan className="aboutIcon" />,
    IconLabel: "Business loan",
    Heading: "Business loan",
    Details:
      "A business loan is a debt you take for any business purpose. Bill Discounting, Invoice Discounting, Purchase Invoice Finance- It is a loan based on the amount due from debtors i.e. pending invoices so that the loan amount can be used in various activities till the customers pay.",
  },
  {
    Icon: <AiOutlinePropertySafety className="aboutIcon" />,
    IconLabel: "Mortgage loan",
    Heading: "Mortgage loan",
    Details:
      "A mortgage is a type of loan used to purchase or maintain a home, plot of land, or other types of real estate. The borrower agrees to pay the lender over time. typically in a series of regular payments that are divided into principal and interest. The property then serves as collateral to secure the loan.",
  },
  {
    Icon: <AiOutlineFundProjectionScreen className="aboutIcon" />,
    IconLabel: "Project loan",
    Heading: "Project loan",
    Details:
      "A project loan is known as project financing which is a long-term funding. Individuals who plan to start a project be it an infrastructure, public services, or industrial project require funds for the same so, they can avail a project loan.",
  },
  {
    Icon: <FaRegMoneyBillAlt className="aboutIcon" />,
    IconLabel: "Working Capital",
    Heading: "Working capital",
    Details:
      "Working capital is a financial metric that is the difference between a company's curent assets and current liabilities. As a financial metric, working capital helps plan for future needs and ensure the company has enough cash and cash equivalents meet short-term obligations, such as unpaid taxes and short-term debt",
  },
  {
    Icon: <AiOutlineStock className="aboutIcon" />,
    IconLabel: "trade finance",
    Heading: "Trade finance",
    Details:
      "Trade finance represents the financial instruments and products that are used by companies to facilitate international trade and commerce.",
  },
 
];
export default aboutCardData;
