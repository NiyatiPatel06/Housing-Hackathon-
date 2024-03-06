// Define the User class
class User {
    constructor(id, username, email, password) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }
  
  // Define the RentalProperty class
  class RentalProperty {
    constructor(id, address, price, bedrooms, bathrooms, description) {
      this.id = id;
      this.address = address;
      this.price = price;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.description = description;
      this.tenants = []; // Array to store users renting this property
    }
  
    // Method to add a tenant
    addTenant(user) {
      this.tenants.push(user);
    }
  
    // Method to remove a tenant
    removeTenant(user) {
      this.tenants = this.tenants.filter(tenant => tenant.id !== user.id);
    }
  }
  
  // Define the HousemateSearch class
  class HousemateSearch {
    constructor(id, userId, location, maxRent, minBedrooms, minBathrooms, description) {
      this.id = id;
      this.userId = userId;
      this.location = location;
      this.maxRent = maxRent;
      this.minBedrooms = minBedrooms;
      this.minBathrooms = minBathrooms;
      this.description = description;
    }
  }
  
  // Sample usage
  const user1 = new User("U1", "john_doe", "john@example.com", "password123");
  const rentalProperty1 = new RentalProperty("RP1", "123 Main St", 1500, 2, 1, "Cozy apartment in downtown");
  const housemateSearch1 = new HousemateSearch("HS1", "U1", "Downtown", 1000, 1, 1, "Looking for a roommate in downtown area");
  
  // Add more instances of User, RentalProperty, or HousemateSearch classes as needed
  