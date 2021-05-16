package beverage.coffeeTypes;

import beverage.Coffee;

public class Cappuccino extends Coffee {
	public String description;
	public Cappuccino() {
	 this.description = "Coffee ";
	}
	@Override
	public String getDescription() {
		return this.description;
	}
	@Override
	public double getCost() {
		return 20;
	}
}
