
// Sample Code for Event Listing and Joining

const events = [
    { id: 1, name: "Music Concert", date: "2024-10-10", joined: false },
    { id: 2, name: "Tech Conference", date: "2024-11-01", joined: false }
];

// Function to list all events
function listEvents() {
    console.log("Available Events:");
    events.forEach(event => {
        console.log(`${event.id}. ${event.name} on ${event.date}`);
    });
}

// Function to join an event by ID
function joinEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event && !event.joined) {
        event.joined = true;
        console.log(`You have successfully joined ${event.name}`);
    } else {
        console.log("Event not found or already joined.");
    }
}

// Example usage
listEvents();
joinEvent(1); // Join the Music Concert
