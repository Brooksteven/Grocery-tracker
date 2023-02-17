const saveNewItemHandler = async (event) => {
    event.preventDefault();
    // Collect values from the /newGift form
    const recipientName = document.querySelector('#newitemItee').value.trim();
    const description = document
      .querySelector('#newitemDescription')
      .value.trim();
  
    // recipientName and description are required to create a new Gift
    if (recipientName && description) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({ recipientName, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/userlanding');
      } else {
        alert(response.statusText);
      }
    }
  
    const response = await fetch(`/api/items/${id}`, {
      method: 'POST',
    });
  
    if (response.ok) {
      document.location.replace('/userlanding');
    } else {
      alert('Failed to add project');
    }
  };
  
  const cancelButtonHandler = async () => {
    document.location.replace('/userlanding');
  }
  
  document
    .querySelector('#itemCancel')
    .addEventListener('reset', cancelButtonHandler);
  
  document
    .querySelector('#itemSave')
    .addEventListener('click', saveNewItemHandler);