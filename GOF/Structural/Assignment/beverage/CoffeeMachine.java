package beverage;
import beverage.Coffee;
import beverage.coffeeTypes.Espresso;
import beverage.coffeeTypes.Latte;
import beverage.decorator.conditments.MilkConditment;
import beverage.decorator.conditments.WaterConditment;
public class CoffeeMachine extends Coffee {
	public CoffeeMachine() {
		
	}
	public static void start() {
		
	}
	public static void stop() {
		
	}
	public void addBin() {
		
	}

	/*
	 * public static Coffee prepareCoffee() { return new Coffee(); }
	 */
	public static void main(String[] args) {
		Coffee espresso = new WaterConditment(new Espresso());
		Coffee latte = new WaterConditment(new MilkConditment(new Latte()));
		System.out.println("espressso :"+ espresso.getDescription());
		System.out.println("latte :"+ latte.getDescription());		
	}

}
