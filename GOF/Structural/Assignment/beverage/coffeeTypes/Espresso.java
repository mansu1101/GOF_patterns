package beverage.coffeeTypes;

import beverage.Coffee;

public class Espresso extends Coffee {
	public String description;
	public Espresso() {
	 this.description = "Coffee ";
	}
	@Override
	public String getDescription() {
		return this.description;
	}
	@Override
	public double getCost() {
		return 25;
	}
}
