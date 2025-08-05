# 5) შექმენით 'lambda' ფუნქცია, რომელიც გადაყავს ცელსიუსი ფარენჰეიტში და გამოიყენეთ 'for' ციკლში
celsius_to_fahrenheit = lambda c: (c * 9/5) + 32

temperatures_celsius = [0, 20, 37, 100]
temperatures_fahrenheit = [celsius_to_fahrenheit(temp) for temp in temperatures_celsius]