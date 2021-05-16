This Principle is all about people. Remember that the reasons for change are people.
It is people who request changes. And hence different changes required by different 
people should be divided further. So let’s extend that ‘and/or trick’ a bit further 
and think about one more question — who is the program responsible to?

Let’s say your company has an Employee management system, which looks like the following:
`public class Employee {
  public Money calculatePay(){
  /** An algorithm than determines how much an employee should be paid depending upon his offer letter, working hours etc.*/
  }
public void save(){
  /** Saves the employee data into company database. */
  }
public String reportHours(){
  /** calculates the hours person spend working based on his swipe hours and timesheets.*/
  }
}`

Of course, in reality, it will be a bit complex than this.

Now you must be thinking that of course all the three functionalities present here
 — calculatePay, save, and reportHours belong to employee and it makes sense
 if we keep them in the same class. This is the right time to ask the question
  to ourselves —


#What does this class do?

It calculates the pay of an employee and calculates the reporting hours of an employee and
saves its data to the company database. Three ‘ands’? Let’s ask further,

#who these functionalities report to?
 The pay calculation part seems to be the responsibility of the finance department of
 the organization, the hours reporting part the responsibility of the operations 
 department and saving is the responsibility of the technical database department.
 Since we have 3 ‘ands’ and 3 responsibilities, its time to divide them into
 3 different classes, and this is how SRP works.

# Its advantages? 
Let’s count a few:
1. Easy Testing — when each class has a single responsibility and low coupling,
        it’s relatively easy to test. Especially in TDD (Test Driven Development) approach,
        it makes it fairly easy to write test cases according to the behavior of class
        and start development.
2. Free yourself from the maintenance mess — Believe me, the last thing you want
        to do in your project is to make a change in a class that affects other parts 
        of the class and creates a cascading effect on the rest of the system.
        And I have seen programmers creating patches after patches on top of an 
        old class, just to avoid changing the code written, which ends up being a
        bigger mess than we can handle.