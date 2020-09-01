inputs = [1.2, 1.8, 2.1, 1]
weights1 = [2.1, 1, -0.2, 1.0]
weights2 = [0.1, 0.5, -0.7, 3.0]
weights3 = [-0.21, -2.27, -0.1, 2.0]
bias1 = 3
bias2 = 3
bias3 = 3

output = [
    inputs[0] * weights1[0] +\
    inputs[1] * weights1[1] +\
    inputs[2] * weights1[2] +\
    inputs[3] * weights1[3] + bias1,
    
    inputs[0] * weights2[0] +\
    inputs[1] * weights2[1] +\
    inputs[2] * weights2[2] +\
    inputs[3] * weights2[3] + bias2,
    
    inputs[0] * weights3[0] +\
    inputs[1] * weights3[1] +\
    inputs[2] * weights3[2] +\
    inputs[3] * weights3[3] + bias3,
]

print(output)
