function searchByBudget() {
    const budgetRange = document.getElementById("budgetRange").value.split("-");
    const minBudget = parseInt(budgetRange[0]);
    const maxBudget = parseInt(budgetRange[1]);

    const filteredProperties = rentalProperties.filter(property => {
        const budget = parseInt(property.budget);
        return budget >= minBudget && budget <= maxBudget;
    });

    displayResults(filteredProperties);
  }

  function displayResults(properties) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      properties.forEach(property => {
          const propertyDiv = document.createElement("div");
          propertyDiv.classList.add("property");

          const title = document.createElement("h3");
          title.textContent = property.title;
          propertyDiv.appendChild(title);

          const price = document.createElement("p");
          price.textContent = "Price: " + property.price;
          propertyDiv.appendChild(price);

          const image = document.createElement("img");
          image.src = property.image;
          image.alt = "Property Image";
          propertyDiv.appendChild(image);

          resultsDiv.appendChild(propertyDiv);
      });
  }