package beverage.decorator;
import beverage.Coffee;
public abstract class CoffeeDecorator extends Coffee {
	@Override
	public abstract String getDescription(); 
	@Override
	public abstract double getCost(); 
}
