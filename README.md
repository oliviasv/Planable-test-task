# Cypress Automation Tests for a simple React Counter App

## Test Plan

#### Items to be tested
* Items Counter (ShopCart)
* Each individual Counter
* Reset Button
* Recycle Button

##### Test Case for Each Individual Counter
1.  Verify if each ``badge-value`` contains the initial value 'Zero'
2.  Generate a random number (``num``)
3.  Select all ``plus-button`` and click ``num`` times on each of them
4.  Verify if each ``badge-value`` is equal to ``num``
5.  Select all ``minus-button`` and click ``num`` times on each of them
6.  Verify if each ``badge-value`` is equal to 'Zero'


##### Test Case for Items Counter (ShopCart)
1.  Select all ``plus-button`` and click on each of them
2.  Verify if the ShopCart (``items-counter``) value is equal to  '4'
3.  Select all ``minus-button`` and click on each of them
4.  Verify if the ShopCart (``items-counter``) value is equal to '0'
5.  Select all ``plus-button`` and double click on each of them
6.  Verify if the ShopCart (``items-counter``) value is also equal to  '4'
7.  Select all ``minus-button`` and double click on each of them
8.  Verify if the ShopCart (``items-counter``) value is also equal to  '0'

##### Test Case for Reset Button
1.  Generate a random number ``num1``
2.  Select all plus buttons and click ``num1`` times on each of them
3.  Select and click the ``reset-button`` 
4.  Verify if each ``badge-value`` is equal to 'Zero'

##### Test Case for Recycle Button
1.  Select all ``delete-buttons`` and click on each of them
2.  Select and click the ``recycle-button``
3.  Select all ``individual-cpunters`` and verify if they are visible again
4.  Select all  ``badge-value`` and verify that they contain the 'Zero' value 
