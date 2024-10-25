document.addEventListener('DOMContentLoaded', async function () {
    const logsDiv = document.getElementById('logs');

    try {
        const response = await fetch('/logs');
        if (!response.ok) throw new Error('Failed to fetch logs');
        const logs = await response.json();
        logsDiv.innerHTML = logs.length > 0 
            ? logs.map(log => `
                <div class="log-entry">
                    <h3>Log ID: ${log.id}</h3>
                    <p><strong>Created:</strong> ${log.created}</p>
                    <p><strong>Drone ID:</strong> ${log.drone_id}</p>
                    <p><strong>Drone Name:</strong> ${log.drone_name}</p>
                    <p><strong>Temperature (°C):</strong> ${log.celsius}</p>
                    <p><strong>Collection ID:</strong> ${log.collectionId}</p>
                    <p><strong>Collection Name:</strong> ${log.collectionName}</p>
                    <p><strong>Country:</strong> ${log.country}</p>
                    <p><strong>Updated:</strong> ${log.updated}</p>
                </div>
            `).join('') 
            : '<p>No logs available.</p>';
    } catch (error) {
        logsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
