// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all the service images
  const serviceImages = document.querySelectorAll('.service-image');

  // Add a click event listener to each service image
  serviceImages.forEach(image => {
    image.addEventListener('click', () => {
      // Get the alt text of the clicked service image
      const service = image.getAttribute('alt');

      // Display a small detail about the clicked service
      switch (service) {
        case 'Window Cleaning':
          window.location.href = 'window-cleaning.html'; // Redirect to a new page specific to Window Cleaning service
          break;
        case 'Mowing/Trimming/Landscape Work/Mulching':
          window.location.href = 'mowing-landscaping.html'; // Redirect to a new page specific to Mowing/Trimming/Landscape Work/Mulching service
          break;
        case 'Gutter Cleaning':
          window.location.href = 'gutter-cleaning.html'; // Redirect to a new page specific to Gutter Cleaning service
          break;
        case 'Power Washing (Driveways, Decks/Patios, etc.)':
          window.location.href = 'power-washing.html'; // Redirect to a new page specific to Power Washing service
          break;
        case 'Car Washing/Waxing':
          window.location.href = 'car-washing.html'; // Redirect to a new page specific to Car Washing/Waxing service
          break;
        case 'Wood Cutting and/or Selling':
          window.location.href = 'wood-cutting.html'; // Redirect to a new page specific to Wood Cutting and/or Selling service
          break;
        case 'Siding Cleaning':
          window.location.href = 'siding-cleaning.html'; // Redirect to a new page specific to Siding Cleaning service
          break;
        case 'Grill Cleaning':
          window.location.href = 'grill-cleaning.html'; // Redirect to a new page specific to Grill Cleaning service
          break;
        default:
          break;
      }
    });
  });
});
