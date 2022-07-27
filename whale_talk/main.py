input = 'a whale of a deal!'
vowels = ['a', 'e', 'i', 'o', 'u']
resultArray = []

for i  in range(len(input)):
    for j in range(len(vowels)):
        if input[i] == vowels[j]:
            resultArray.append(input[i])
    if input[i] == 'e':
        resultArray.append(input[i])
    if input[i] == 'u':
        resultArray.append(input[i])

print(resultArray)
resultString = ''.join(resultArray)
print(resultString.upper())