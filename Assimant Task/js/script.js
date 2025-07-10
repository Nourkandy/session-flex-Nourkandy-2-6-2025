 const counters = document.querySelectorAll('.counter');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        counters.forEach(counter => {
          animateCounter(counter);
        });
        started = true;
      }
    });
  }, {
    threshold: 0.5,
  });

  observer.observe(document.querySelector('#counters'));

  function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    let duration = 2000 + Math.random() * 2000;
    const step = target / (duration / 16);

    const update = () => {
      count += step;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  }



   function showDetail(title) {
            const detailCard = document.getElementById('detailCard');
            const overlay = document.getElementById('overlay');
            const detailTitle = document.getElementById('detailTitle');
            const detailText = document.getElementById('detailText');
            
            // Set the content based on the title
            detailTitle.textContent = title;
            detailText.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Incididunt ut labore et dolore. Lorem ipsum dolor sit amet.`;
            
            // Show the detail card and overlay
            detailCard.classList.add('active');
            overlay.classList.add('active');
        }
        
        function hideDetail() {
            const detailCard = document.getElementById('detailCard');
            const overlay = document.getElementById('overlay');
            
            // Hide the detail card and overlay
            detailCard.classList.remove('active');
            overlay.classList.remove('active');
        }
        
        // Close when clicking outside the card
        document.addEventListener('click', function(event) {
            const detailCard = document.getElementById('detailCard');
            const overlay = document.getElementById('overlay');
            
            if (event.target === overlay) {
                hideDetail();
            }
        });