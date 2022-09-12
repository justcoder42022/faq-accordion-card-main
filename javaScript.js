const detailsList = document.querySelectorAll("details");
const summaryList = document.querySelectorAll("summary");

for (const summary of summaryList) {
  summary.addEventListener("click", () => {
    detailsClose();
  });
}

function detailsClose() {
  for (const details of detailsList) {
    if (details.hasAttribute("open")) {
      details.removeAttribute("open");
    }
  }
}
