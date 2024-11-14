function combat(currentHealth, damage) {
  
    let newHealth = currentHealth - damage;
    if (newHealth < 0) {
      newHealth = 0;
    }
    return newHealth;
  }