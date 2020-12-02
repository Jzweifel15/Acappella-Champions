document.addEventListener("DOMContentLoaded", function() {
  const BASE_URL = "http://localhost:3000";
  const COLLEGES_URL = `${BASE_URL}/colleges`;

  let collegesTableData = [];
  let collegesTable = document.getElementById("table-body");

  fetch(COLLEGES_URL)
  .then(resp => resp.json())
  .then(data => {
    data.forEach(college => {
      let tr = document.createElement("tr");
      let tdName = document.createElement("td");
      let tdGroupName = document.createElement("td");
      let tdMembership = document.createElement("td");
      let tdDivision = document.createElement("td");

      tdName.innerText = college.name;
      tdGroupName.innerHTML = college.group_name;
      tdMembership.innerHTML = college.membership;
      tdDivision.innerHTML = college.division;

      tr.appendChild(tdName);
      tr.appendChild(tdGroupName);
      tr.appendChild(tdMembership);
      tr.appendChild(tdDivision);
      collegesTableData.push(tr);
    });
  });

  console.log(collegesTableData);

  (function() {
    collegesTableData.forEach(tableRow => {
      collegesTable.appendChild(tableRow);
    });
    //for (let i = 0; i < collegesTableData.length; i++)
    //{
    //  collegesTable.appendChild(collegesTableData[i]);
    //}
  })();

});

