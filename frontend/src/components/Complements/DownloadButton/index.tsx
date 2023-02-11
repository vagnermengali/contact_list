import { StyledDownloadButton, Button } from "./style";
import { FaPlus, FaAddressBook, FaDownload } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context as ContextPage } from "@/context/pageContext";
import { Context as ContextUser } from "@/context/userContext";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'

const DownloadButton = () => {
  const { dropDownAdd, handleClickdropDownAdd, showDropdownContact } = useContext(ContextPage)
  const { contactPdf } = useContext(ContextUser)


  const generatePDF = () => {
    const doc = new jsPDF();
    const table = [
      ...Object.values(contactPdf).map((contact) => {
        const date = new Date(contact.created_at);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        return [contact.name, contact.email, contact.telephone, formattedDate];
      }),
    ];
    autoTable(doc, {
      head: [["Name", "E-mail", "Telephone", "Added in"]],
      body: table,
    })
    doc.save("contact-list.pdf");
  };

  return (
    <div>
      <StyledDownloadButton>
        <Button dropdown={dropDownAdd} onClick={() => handleClickdropDownAdd()}>
          <FaPlus />
          <div className="tooltip">
            <button onClick={() => showDropdownContact()}><FaAddressBook />
              <span>Add contacts</span>
            </button>
            <button onClick={generatePDF}><FaDownload />
              <span>Contacts download</span>
            </button>
          </div>
        </Button>
      </StyledDownloadButton>
    </div>
  );
}

export default DownloadButton;