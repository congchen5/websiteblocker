// Saves options to chrome.storage
function save_options() {
  var url = document.getElementById('update_url').value;
  chrome.storage.sync.set({
    block_url: url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
    update_options();
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function update_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    block_url: 'asdf',
  }, function(items) {
    document.getElementById('block_url').innerText = items.block_url;
  });
}

document.addEventListener("DOMContentLoaded", function(event) { 
  update_options();
  document.getElementById('save').addEventListener('click', save_options);
});
