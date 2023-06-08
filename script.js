
    const items = document.querySelectorAll('.item');
    const container2 = document.getElementById('container2');
    const successMessage = document.getElementById('successMessage');

    let draggedItem = null;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      item.addEventListener('dragstart', function() {
        draggedItem = item;
        setTimeout(function() {
          item.classList.add('dragging');
        }, 0);
      });

      item.addEventListener('dragend', function() {
        setTimeout(function() {
          item.classList.remove('dragging');
          draggedItem = null;
        }, 0);
      });
    }

    container2.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    container2.addEventListener('dragenter', function(e) {
      e.preventDefault();
      container2.style.background = '#f0f0f0';
    });

    container2.addEventListener('dragleave', function() {
      container2.style.background = 'none';
    });

    container2.addEventListener('drop', function() {
      container2.appendChild(draggedItem);
      container2.style.background = 'none';
      successMessage.style.display = 'block';
    });

    function reset() {
      container2.innerHTML = '<div class="success-message" id="successMessage">Item dropped successfully!</div>';
      successMessage.style.display = 'none';
      for (let i = 0; i < items.length; i++) {
        document.getElementById('container1').appendChild(items[i]);
      }
    }
