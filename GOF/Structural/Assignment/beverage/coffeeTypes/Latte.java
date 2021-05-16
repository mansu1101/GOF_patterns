package beverage.coffeeTypes;

import beverage.Coffee;

public class Latte extends Coffee {
	public String description;
	public Latte() {
	 this.description = "Coffee ";
	}
	@Override
	public String getDescription() {
		return this.description;
	}
	@Override
	public double getCost() {
		return 15;
	}
}
