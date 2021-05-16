package beverage.decorator.conditments;

import beverage.Coffee;
import beverage.decorator.CoffeeDecorator;

public class WaterConditment extends CoffeeDecorator {
	protected Coffee wrappe;
	public WaterConditment(Coffee wc) {
		this.wrappe = wc;
	}
	@Override
	public String getDescription() {
		return this.wrappe.getDescription()+" + hot water ";
	}
	@Override
	public double getCost() {
		return this.wrappe.getCost() + 10;
	}
}
