document.getElementById('searchButton').addEventListener('click', async function (event) {
    event.preventDefault();
    const droneId = document.getElementById('droneId').value;
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch(`/configs/${droneId}`);
        if (!response.ok) throw new Error('Drone not found');
        const droneConfig = await response.json();
        resultDiv.innerHTML = `
            <h2>Drone Configuration:</h2>
            <p><strong>Drone ID:</strong> ${droneConfig.drone_id}</p>
            <p><strong>Drone Name:</strong> ${droneConfig.drone_name}</p>
            <p><strong>Light:</strong> ${droneConfig.light}</p>
            <p><strong>Max Speed:</strong> ${droneConfig.max_speed}</p>
            <p><strong>Country:</strong> ${droneConfig.country}</p>
            <p><strong>Population:</strong> ${droneConfig.population}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
