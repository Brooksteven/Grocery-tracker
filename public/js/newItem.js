const saveNewItemHandler = async (event) => {
  event.preventDefault();
  // Collect values from the /newGift form
  const recipientName = document.querySelector('#newitemName').value.trim();
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
      window.location.replace('/userlanding');
    } else {
      alert(response.statusText);
    }
  }

  const response = await fetch(`/api/items/${id}`, {
    method: 'POST',
  });

  if (response.ok) {
    window.location.replace('/userlanding');
  } else {
    alert('Failed to add project');
  }
};

const cancelButtonHandler = async () => {
 window.location.replace('/userlanding');
}

document
  .querySelector('#itemCancel')
  .addEventListener('reset', cancelButtonHandler);

document
  .querySelector('#itemSave')
  .addEventListener('submit', saveNewItemHandler);