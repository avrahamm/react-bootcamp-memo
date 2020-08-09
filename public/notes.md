Counter.render: 1
Header.render: 1
DisplayValue.render: 1
DisplayMod5.render: 1
MyButton.render: 1

Initial code desctiption.
There are 2 ops:
Counter.render: 1

1. Increase by.
   Expected: should run Counter.render: 1 more time only.
   Actual: changes Counter state delta variable and rerenders all components.

2. 'Click Me'.
   Expected: Should run DisplayValue.render: 1 more time and
   DisplayMod5.render: 1 more time.
   Actual: changes Counter state count variable and rerenders all components.
