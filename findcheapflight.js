// Sample array of flights
const flights = [
    { origin: "Mumbai", destination: "Delhi", price: 350, departureTime: "10:00 AM" },
    { origin: "Mumbai", destination: "Bangalore", price: 300, departureTime: "10:00 AM" },
    { origin: "Delhi", destination: "Bangalore", price: 200, departureTime: "11:00 AM" },
    { origin: "Mumbai", destination: "Bangalore", price: 210, departureTime: "10:00 AM" },
    { origin: "Bangalore", destination: "Delhi", price: 220, departureTime: "09:00 AM" },
    // Add more flights as needed
];

// Function to sort flights by price using bubble sort
function sortByPrice(flights) {
    const n = flights.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (flights[j].price > flights[j + 1].price) {
                // Swap flights
                [flights[j], flights[j + 1]] = [flights[j + 1], flights[j]];
            }
        }
    }
}

// Function to find the cheapest flights between specified origin and destination
function findCheapestFlight(origin, destination, flights) {
    // Filter flights from origin to destination
    const filteredFlights = flights.filter(flight => flight.origin === origin && flight.destination === destination);

    // Sort filtered flights by price
    sortByPrice(filteredFlights);

    return filteredFlights;
}

// Example usage:
const userOrigin = "Mumbai";
const userDestination = "Bangalore";

const cheapestFlights = findCheapestFlight(userOrigin, userDestination, flights);

if (cheapestFlights.length > 0) {
    console.log(`Cheapest flights from ${userOrigin} to ${userDestination}:`);
    cheapestFlights.forEach(flight => {
        console.log(`Price: $${flight.price}, Departure Time: ${flight.departureTime}`);
    });
} else {
    console.log(`Sorry, no flights found from ${userOrigin} to ${userDestination}.`);
}
