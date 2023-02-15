const addButtonHandler = async (event) => {
    document.location.replace('/newItem');
  };
  
  const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      document.location.replace(`/api/item/${id}`);
    } else {
      alert('Update button did not have a data-id');
    }
  };
  
  const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/userlanding');
      } else {
        alert('Failed to delete project');
      }
    } else {
      alert('Delete button did not have a data-id');
    }
  };
  
  document
    .getElementById('btn-add-item')
    .addEventListener('click', addButtonHandler);
  
  document
    .querySelectorAll('.edit-item-btn')
    .forEach(btn => btn.addEventListener('click', updateButtonHandler));
  
  document
    .querySelectorAll('.delete-item-btn')
    .forEach(btn => btn.addEventListener('click', deleteButtonHandler));