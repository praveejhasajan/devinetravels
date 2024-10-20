document.addEventListener('DOMContentLoaded', function() {
    const incExcDetails = document.getElementById('incExcDetails');
    
    const inclusionsContent = `
        <ul class="p0 m0 incl-excl-list">
            <li>Accommodation as per tour itinerary</li>
            <li>Welcome drink on arrival</li>
            <li>Breakfast</li>
            <li>Dinner</li>
            <li>All transfers and sightseeing by desire/indigo/similar</li>
            <li>Pickup and drop from Haridwar</li>
            <li>Sightseeing as per itinerary</li>
            <li>All government taxes, hotel taxes, toll taxes, fuel, parking, driver charges</li>
            <li>GST included</li>
        </ul>
    `;
    
    const exclusionsContent = `
        <ul class="p0 m0 incl-excl-list">
            <li>Accommodation: Single and Triple</li>
            <li>Lunch</li>
            <li>Use of gymnasium</li>
            <li>English speaking driver</li>
            <li>Use of swimming pool</li>
            <li>Trip supplements</li>
            <li>Cab: SIC</li>
        </ul>
    `;

    function updateContent() {
        const selectedOption = document.querySelector('input[name="inc-exc-radio"]:checked').id;
        incExcDetails.innerHTML = selectedOption === 'IncExcRadio1' ? inclusionsContent : exclusionsContent;
    }

    document.querySelectorAll('input[name="inc-exc-radio"]').forEach(radio => {
        radio.addEventListener('change', updateContent);
    });

    // Initialize with the inclusions content
    updateContent();
});

