package beverage.coffeeTypes;

import beverage.Coffee;

public class Mocha extends Coffee {
	public String description;
	public Mocha() {
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
