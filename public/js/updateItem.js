const cancelButtonHandler = async () => {
    window.location.replace('/userlanding');
  }
  
  const newFormHandler = async (event) => {
    event.preventDefault();
    const url = window.location.href;
    // https://stackoverflow.com/questions/3730359/get-id-from-url-with-jquery
    const id = url.substring(url.lastIndexOf('/') + 1);
    const recipientName = document.getElementById("itemItemee").value.trim();
    const description = document.getElementById("itemDescription").value.trim();
    const purchased = document.getElementById("itemPurchased").checked;
    //   keep these two just in case we decide to include the budget and notes
    //   const budget = document.querySelector("#giftBudget").value.trim();
    //   const notes = document.querySelector("#giftNotes").value.trim();
  
    if (recipientName && description) {
      const response = await fetch(`/api/items/${id}`, {
        method: "PUT",
        body: JSON.stringify({ recipientName, description, purchased }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        window.location.replace("/userlanding");
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