module.exports = [
    {
      id: 1,
      name: "Valuation Fee Paid",
      condition: (data) => data.isValuationFeePaid === true,
    },
    {
      id: 2,
      name: "UK Resident",
      condition: (data) => data.isUkResident === true,
    },
    {
      id: 3,
      name: "Risk Rating Medium",
      condition: (data) => data.riskRating === "Medium",
    },
    {
      id: 4,
      name: "LTV Below 60%",
      condition: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  