const cancelButtonHandler = async () => {
    document.location.replace('/userlanding');
  }
  
  const newFormHandler = async (event) => {
    event.preventDefault();
    const url = window.location.href;
    // https://stackoverflow.com/questions/3730359/get-id-from-url-with-jquery
    const id = url.substring(url.lastIndexOf('/') + 1);
    const recipientName = document.getElementById("giftGiftee").value.trim();
    const description = document.getElementById("giftDescription").value.trim();
    const purchased = document.getElementById("giftPurchased").checked;
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