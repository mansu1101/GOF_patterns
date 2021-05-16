package beverage.decorator.conditments;

import beverage.Coffee;
import beverage.decorator.CoffeeDecorator;

public class MilkConditment extends CoffeeDecorator{
	protected Coffee wrappe;
	public MilkConditment(Coffee wc) {
		this.wrappe = wc;
	}
	@Override
	public String getDescription() {
		return this.wrappe.getDescription()+" + milk";
	}
	@Override
	public double getCost() {
		return this.wrappe.getCost() + 10;
	}
	
}
