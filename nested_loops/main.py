bobsFollowers = ['Jude', 'Sammy', 'Aba', 'Ada']
tinasFollowers =  ['Jude', 'Black', 'Aba']

mutualFollowers = []

for i in range(len(bobsFollowers)):
    for j in range(len(tinasFollowers)):
        if bobsFollowers[i] == tinasFollowers[j]:
            mutualFollowers.append(bobsFollowers[i])
            
print(mutualFollowers)

