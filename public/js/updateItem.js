const cancelButtonHandler = async () => {
    document.location.replace('/userlanding');
  }
  
  const newFormHandler = async (event) => {
    event.preventDefault();
    const url = window.location.href;
    // https://stackoverflow.com/questions/3730359/get-id-from-url-with-jquery
    const id = url.substring(url.lastIndexOf('/') + 1);
    const recipientName = document.getElementById("itemItemm").value.trim();
    const description = document.getElementById("itemDescription").value.trim();
    const purchased = document.getElementById("itemPurchased").checked;
    //   keep these two just in case we decide to include the budget and notes
    //   const budget = document.querySelector("#itemBudget").value.trim();
    //   const notes = document.querySelector("#itemNotes").value.trim();
  
    if (recipientName && description) {
      const response = await fetch(`/api/item/${id}`, {
        method: "PUT",
        body: JSON.stringify({ recipientName, description, purchased }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/userlanding");
      } else {
        alert("Failed to update item");
      }
    }
  };
  
  
  
  document
    .querySelector('.updateItemForm')
    .addEventListener('reset', cancelButtonHandler);
  
  document
    .querySelector(".updateItemForm")
    .addEventListener("submit", newFormHandler);
  