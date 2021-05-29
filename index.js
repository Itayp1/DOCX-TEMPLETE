const { createReport } = require("docx-templates");
const fs = require("fs");

const start = async () => {
  const template = fs.readFileSync("templete.docx");

  const data = {
    name: "docx-templates",
    service: { creation: "04-04-2021", ProgrammerName: "GetAllCustomerDetails", name: "Vlad" },

    Accounts_array: [
      {
        Account_number: "124125125",
        Acc_date: "02-02-2020",
      },
      {
        Account_number: "121321325",
        Acc_date: "02-02-2024",
      },
      {
        Account_number: "13333125",
        Acc_date: "02-02-2023",
      },
      {
        Account_number: "1444425",
        Acc_date: "02-02-2022",
      },
    ],
  };

  const buffer = await createReport({
    template,
    data: data,
    cmdDelimiter: ["{", "}"],
  });

  fs.writeFileSync("templeteReady.docx", buffer);
};

start();
