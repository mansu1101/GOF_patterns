package beverage.decorator.conditments;

import beverage.Coffee;
import beverage.decorator.CoffeeDecorator;

public class ChocolateCoditment extends CoffeeDecorator{
	protected Coffee wrappe;
	public ChocolateCoditment(Coffee wc) {
		this.wrappe = wc;
	}
	@Override
	public String getDescription() {
		return this.wrappe.getDescription()+" + chocolate";
	}
	@Override
	public double getCost() {
		return this.wrappe.getCost() + 10;
	}
}
