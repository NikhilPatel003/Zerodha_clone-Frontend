import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccordionItem from "./AccordionItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Accordion() {
  const accordionData = [
    {
      id: "collapseOne",
      icon: AddCircleOutlineIcon,
      title: "Account Opening",
      content: [
        "Resident Individual",
        "Minor",
        "Non-Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
      isOpen: true,
    },
    {
      id: "collapseTwo",
      icon: AccountCircleIcon,
      title: "Your Zerodha Account",
      content: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],

      isOpen: false,
    },
    {
      id: "collapseThree",
      icon: InfoOutlinedIcon,
      title: "Kite",
      content: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
      isOpen: false,
    },
    {
      id: "collapseFour",
      icon: CurrencyRupeeIcon,
      title: "Funds",
      content: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
      isOpen: false,
    },
    {
      id: "collapseFive",
      icon: AddCircleOutlineIcon,
      title: "Console",
      content: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
      isOpen: false,
    },
    {
      id: "collapseSix",
      icon: AddCircleOutlineIcon,
      title: "Coin",
      content: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
      isOpen: false,
    },
  ];

  return (
    <div className="accordion mt-5 pe-5" id="accordionExample">
      {accordionData.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Accordion;
